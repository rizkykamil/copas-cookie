import { Entry, StorageData, Cookie } from '@/app/types';

const DB_KEY = 'cookieManagerDB';

export function getEntries(): Entry[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const data = localStorage.getItem(DB_KEY);
    if (!data) return [];
    
    const parsed: StorageData = JSON.parse(data);
    return parsed.entries || [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
}

export function saveEntries(entries: Entry[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    const data: StorageData = { entries };
    localStorage.setItem(DB_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

export function addEntry(
  website: string,
  cookies: Cookie[],
  username?: string,
  password?: string
): Entry {
  const entries = getEntries();
  const newEntry: Entry = {
    id: Date.now(),
    website,
    cookies,
    username,
    password,
    createdAt: Date.now(),
  };
  
  entries.unshift(newEntry);
  saveEntries(entries);
  return newEntry;
}

export function deleteEntry(id: number): void {
  const entries = getEntries();
  const filtered = entries.filter((e) => e.id !== id);
  saveEntries(filtered);
}

export function getActiveEntries(): Entry[] {
  const entries = getEntries();
  const now = Date.now();
  const ONE_HOUR_MS = 3600000;
  
  return entries.filter((e) => now - e.createdAt <= ONE_HOUR_MS);
}

