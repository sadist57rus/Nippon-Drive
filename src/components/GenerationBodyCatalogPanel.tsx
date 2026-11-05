import { useMemo, useState } from 'react';
import { GENERATION_BODY_CATALOG } from '../data/generationBodyCatalog';
import { DROM_GENERATION_INDEX } from '../data/dromGenerationIndex';
import { JAPANESE_BRANDS } from '../data/japaneseBrandsData';
import { JAPANESE_MODEL_FAMILIES } from '../data/japaneseModelFamilies';
import { Search, Database, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const combinedGenerationCatalog = [...GENERATION_BODY_CATALOG, ...DROM_GENERATION_INDEX.filter(item => !GENERATION_BODY_CATALOG.some(existing => existing.make === item.make && existing.model === item.model && existing.generation === item.generation && existing.years === item.years))];

export default function GenerationBodyCatalogPanel() {
  const [query, setQuery] = useState('');
  const [makeFilter, setMakeFilter] = useState('Все марки');
  const [expanded, setExpanded] = useState<string | null>(null);
  const makes = useMemo(() => ['Все марки', ...Array.from(new Set(combinedGenerationCatalog.map(x => x.make))).sort()], []);
  const filtered = useMemo(() => combinedGenerationCatalog.filter(item => {
    const text = [item.make, item.model, item.generation, item.years, ...item.chassisCodes, ...item.engineFamilies, ...item.transmissionFamilies].join(' ').toLowerCase();
    return (makeFilter === 'Все марки' || item.make === makeFilter) && text.includes(query.toLowerCase().trim());
  }), [query, makeFilter]);
  const baseModelCount = new Set(GENERATION_BODY_CATALOG.map(x => x.sourceModelId)).size;
  const splitCount = combinedGenerationCatalog.length - baseModelCount;
  const sourcedCount = DROM_GENERATION_INDEX.length;
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300"><Database className="w-4 h-4" /> Импорт каталога поколений и кузовов</div>
          <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">Индекс японских автомобилей</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Каждая строка — отдельная запись поколения/кузова. Варианты агрегатов предварительные: применимость и сервисные значения требуют проверки по рынку, году и VIN.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 min-w-[190px]">
          <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3"><div className="text-2xl font-black">{combinedGenerationCatalog.length}</div><div className="text-xs text-slate-500">записей</div></div>
          <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3"><div className="text-2xl font-black">{baseModelCount}</div><div className="text-xs text-slate-500">исходных карточек</div></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-2">
        <label className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2"><Search className="w-4 h-4 text-slate-400" /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Модель, кузов, двигатель, КПП..." className="w-full bg-transparent outline-none text-sm" /></label>
        <select value={makeFilter} onChange={e => setMakeFilter(e.target.value)} className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm">{makes.map(make => <option key={make} value={make}>{make}</option>)}</select>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 px-3 py-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Требует проверки: {combinedGenerationCatalog.length}</span>
        <span className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Исходные карточки связаны: {baseModelCount}</span>
        <span className="rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 px-3 py-1">Дополнено индексом Drom: {sourcedCount}</span>
      </div>
      <div className="space-y-2">
        {filtered.map(item => {
          const isOpen = expanded === item.id;
          const base = JAPANESE_BRANDS.flatMap(brand => brand.models).find(model => model.id === item.sourceModelId);
          const family = JAPANESE_MODEL_FAMILIES.find(model => model.make === item.make && model.model.toLowerCase() === item.model.toLowerCase());
          return <article key={item.id} className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <button type="button" onClick={() => setExpanded(isOpen ? null : item.id)} className="w-full flex items-start justify-between gap-3 p-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-500">{item.make} · {item.generation} · {item.years}</div>
                <div className="font-bold text-slate-900 dark:text-white mt-0.5">{item.model}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">Коды: {item.chassisCodes.length ? item.chassisCodes.join(', ') : 'не указаны'} · Кузов: {item.bodyStyles.length ? item.bodyStyles.join(', ') : 'не уточнён'}</div>
              </div>
              <div className="flex items-center gap-2 shrink-0"><span className="text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 px-2 py-1">{item.source ?? 'черновая запись'}</span>{isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</div>
            </button>
            {isOpen && <div className="p-4 pt-0 border-t border-slate-200 dark:border-slate-800 space-y-3 text-sm">
              {base && <p className="text-xs text-slate-500">Связанная карточка приложения: {base.name} · {base.years}</p>}
              {!base && family && <p className="text-xs text-slate-500">Модельное семейство в общем каталоге: {family.model}</p>}
              <div><h3 className="font-bold mb-1">Семейства двигателей</h3><ul className="list-disc pl-5 space-y-1">{item.engineFamilies.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div><h3 className="font-bold mb-1">Коробки передач</h3><ul className="list-disc pl-5 space-y-1">{item.transmissionFamilies.map(x => <li key={x}>{x}</li>)}</ul></div>
              <p className="text-slate-600 dark:text-slate-300">{item.drivetrainNotes}</p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-800/70 p-3"><h3 className="font-bold mb-2">Следующие задачи наполнения</h3><ul className="list-disc pl-5 space-y-1">{item.nextDataTasks.map(x => <li key={x}>{x}</li>)}</ul></div>
            </div>}
          </article>;
        })}
        {filtered.length === 0 && <p className="text-sm text-slate-500 py-8 text-center">По запросу ничего не найдено.</p>}
      </div>
      <p className="text-xs text-slate-500">Индекс Drom содержит поколения, коды кузовов и периоды выпуска. Пустые поля не означают отсутствие модификаций: они ожидают отдельной сверки на уровне конкретной комплектации. Не использовать предварительные данные для заказа деталей или заправки жидкостей без проверки точной модификации.</p>
    </section>
  );
}
