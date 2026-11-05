interface Props {
  credit: string;
  sourceUrl: string;
}

export default function PhotoCredit({ credit, sourceUrl }: Props) {
  return (
    <figcaption className="mt-1 flex min-w-0 flex-col items-center gap-1 text-center text-xs opacity-60">
      <span className="w-full min-w-0 break-words [overflow-wrap:anywhere]">{credit}</span>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center px-2 py-1 text-center"
      >
        <span className="underline underline-offset-2">Источник фото</span>
      </a>
    </figcaption>
  );
}
