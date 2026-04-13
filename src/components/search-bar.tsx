"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

type Option = { label: string; value: string };

type SearchBarProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
  categories?: Option[];
  onCategoryChange?: (value: string) => void;
};

export function SearchBar({
  placeholder = "Search",
  onSearch,
  categories = [],
  onCategoryChange,
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    onSearch(value);
  }, [value, onSearch]);

  useEffect(() => {
    if (onCategoryChange) onCategoryChange(category);
  }, [category, onCategoryChange]);

  return (
    <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_minmax(160px,220px)]">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <Search className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-slate-200 bg-white px-10 py-3 text-sm text-slate-900 shadow-inner shadow-slate-50 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </label>
      {categories.length > 0 && (
        <label className="block text-sm font-medium text-slate-700">
          <span className="sr-only">Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 shadow-inner shadow-slate-50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All categories</option>
            {categories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
}
