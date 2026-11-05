import { useId, useState } from 'react';

interface Props {
  credit: string;
  sourceUrl: string;
}

export default function PhotoCredit({ credit, sourceUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = useId();

  return (
    <figcaption className="relative mt-1 flex min-w-0 justify-end">
      <div className="relative">
        <button
          type="button"
          aria-label="Авторство и лицензия фотографии"
          aria-expanded={isOpen}
          aria-controls={detailsId}
          title="Авторство и лицензия"
          onClick={() => setIsOpen(open => !open)}
          className="flex h-11 w-11 min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-sm text-slate-500 opacity-70 transition hover:bg-slate-500/10 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          <span aria-hidden="true">ⓘ</span>
        </button>
        <div
          id={detailsId}
          hidden={!isOpen}
          role="dialog"
          aria-label="Авторство и лицензия фотографии"
          className="absolute right-0 top-full z-30 mt-1 w-64 max-w-[calc(100vw-2rem)] rounded-lg border border-slate-200 bg-white p-3 text-left text-xs leading-relaxed text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <p>{credit}</p>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-11 items-center font-semibold underline underline-offset-2"
          >
            Источник фото
          </a>
        </div>
      </div>
    </figcaption>
  );
}
