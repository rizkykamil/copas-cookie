'use client';

import { useState, useEffect, useCallback } from 'react';
import { Entry } from '@/app/types';
import { getActiveEntries } from '@/app/utils/storage';

export function useLocalStorage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const refreshEntries = useCallback(() => {
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      const activeEntries = getActiveEntries();
      setEntries(activeEntries);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setMounted(true);
    
    // Load initial data after mount
    refreshEntries();

    // Listen for storage changes (for cross-tab sync)
    const handleStorageChange = () => {
      refreshEntries();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [refreshEntries]);

  // Return empty array during SSR and initial client render to prevent hydration mismatch
  return {
    entries: mounted ? entries : [],
    isLoading: !mounted || isLoading,
    refreshEntries,
  };
}

