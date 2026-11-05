interface Props {
  credit: string;
  sourceUrl: string;
}

export default function PhotoCredit({ credit, sourceUrl }: Props) {
  return (
    <figcaption className="relative mt-1 flex min-w-0 justify-end">
      <details className="group relative">
        <summary
          aria-label="Авторство и лицензия фотографии"
          title="Авторство и лицензия"
          className="flex min-h-8 min-w-8 cursor-pointer list-none items-center justify-center rounded-full text-sm text-slate-500 opacity-70 transition hover:bg-slate-500/10 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current [&::-webkit-details-marker]:hidden"
        >
          <span aria-hidden="true">ⓘ</span>
        </summary>
        <div className="absolute right-0 top-full z-30 mt-1 w-64 max-w-[calc(100vw-2rem)] rounded-lg border border-slate-200 bg-white p-3 text-left text-xs leading-relaxed text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
          <p>{credit}</p>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-11 items-center font-semibold underline underline-offset-2"
          >
            Открыть источник
          </a>
        </div>
      </details>
    </figcaption>
  );
}
