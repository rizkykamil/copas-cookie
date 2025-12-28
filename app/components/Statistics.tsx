'use client';

import { Activity, Database } from 'lucide-react';

interface StatisticsProps {
  activeEntries: number;
  totalCookies: number;
}

export default function Statistics({ activeEntries, totalCookies }: StatisticsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-dark-800 border border-slate-700 p-4 rounded-xl shadow-sm flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Active Entries</p>
          <h3 className="text-2xl font-bold text-white mt-1">{activeEntries}</h3>
        </div>
        <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
          <Activity className="w-6 h-6" />
        </div>
      </div>
      <div className="bg-dark-800 border border-slate-700 p-4 rounded-xl shadow-sm flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Total Cookies</p>
          <h3 className="text-2xl font-bold text-white mt-1">{totalCookies}</h3>
        </div>
        <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400">
          <Database className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

