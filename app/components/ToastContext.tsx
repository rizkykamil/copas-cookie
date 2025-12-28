'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Toast as ToastType } from '@/app/types';
import Toast from './Toast';

interface ToastContextType {
  showToast: (title: string, message: string, type?: ToastType['type']) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToast = useCallback((title: string, message: string, type: ToastType['type'] = 'info') => {
    const newToast: ToastType = {
      id: Date.now().toString(),
      title,
      message,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            title={toast.title}
            message={toast.message}
            type={toast.type}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

