'use client';

import { useState, useMemo } from 'react';
import { Info, Globe, Search, Timer } from 'lucide-react';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { useTimer } from '@/app/hooks/useTimer';
import EntryCard from './EntryCard';

export default function UserTab() {
  const { entries, refreshEntries } = useLocalStorage();
  const { getTimer, getProgress } = useTimer(entries, refreshEntries);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEntries = useMemo(() => {
    if (!searchQuery.trim()) return entries;
    const query = searchQuery.toLowerCase();
    return entries.filter((entry) => entry.website.toLowerCase().includes(query));
  }, [entries, searchQuery]);

  return (
    <div className="fade-in">
      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-200">
          <p className="font-semibold mb-1">Information for Users</p>
          <p>
            Cookies listed here are shared by the admin. Click the <strong>Copy</strong> button to use them. For
            security, all entries will automatically disappear 1 hour after creation.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-end mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Globe className="w-6 h-6 text-brand-500" />
          Available Cookies
        </h3>
        <span className="text-sm text-slate-400">{filteredEntries.length} items found</span>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search website..."
          className="w-full bg-dark-800 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-brand-600"
        />
        <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEntries.length === 0 ? (
          <div className="col-span-full text-center p-8 text-slate-500">
            {searchQuery ? 'No cookies found matching your search.' : 'No cookies available currently.'}
          </div>
        ) : (
          filteredEntries.map((entry) => (
            <EntryCard
              key={entry.id}
              entry={entry}
              timer={getTimer(entry.id)}
              progress={getProgress(entry.id)}
              variant="user"
            />
          ))
        )}
      </div>
    </div>
  );
}

