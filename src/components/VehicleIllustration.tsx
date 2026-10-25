interface Props {
  color?: string;
  bodyType?: string;
  modelName?: string;
  className?: string;
}

/**
 * Vehicle images must depict the selected model, not a generic SVG passed off
 * as a real car. Only models with a verified image are shown as photographs;
 * all other models get a neutral placeholder until a matching image is added.
 */
const VERIFIED_MODEL_IMAGES: Record<string, { src: string; alt: string; credit: string }> = {
  'outlander-1': {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi_outlander_side.jpg',
    alt: 'Mitsubishi Outlander первого поколения, вид сбоку',
    credit: 'Фото: Milkmandan, Wikimedia Commons, CC BY-SA 3.0 / GFDL',
  },
};

export default function VehicleIllustration({
  bodyType = '',
  modelName = '',
  className = '',
}: Props) {
  const normalizedName = `${bodyType} ${modelName}`.toLocaleLowerCase('ru-RU');
  const image = /outlander/i.test(normalizedName) ? VERIFIED_MODEL_IMAGES['outlander-1'] : undefined;

  if (image) {
    return (
      <figure className={`w-full min-w-0 ${className}`}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="block h-auto max-h-56 w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <figcaption className="mt-1 text-center text-xs opacity-60">{image.credit}</figcaption>
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Фотография модели ${modelName || bodyType} пока не добавлена`}
      className={`flex min-h-24 w-full items-center justify-center rounded-md border border-current/15 px-3 py-5 text-center text-sm opacity-60 ${className}`}
    >
      Фото кузова этой модели ещё не проверено
    </div>
  );
}
