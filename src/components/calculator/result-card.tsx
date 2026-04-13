type ResultItem = {
  label: string;
  value: string;
};

type ResultCardProps = {
  title: string;
  items: ResultItem[];
  note?: string;
};

export function ResultCard({ title, items, note }: ResultCardProps) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-inner">
      <p className="text-xs font-semibold uppercase text-blue-700">{title}</p>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-sm">
            <span className="text-slate-700">{item.label}</span>
            <span className="font-semibold text-slate-900">{item.value}</span>
          </div>
        ))}
      </div>
      {note && <p className="mt-3 text-xs text-slate-600">{note}</p>}
    </div>
  );
}
