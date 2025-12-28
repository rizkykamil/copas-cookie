'use client';

import { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { ToastType } from '@/app/types';

interface ToastProps {
  id: string;
  title: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
}

export default function Toast({ id, title, message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      case 'info':
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success':
        return 'bg-dark-800 border-l-4 border-green-500';
      case 'error':
        return 'bg-dark-800 border-l-4 border-red-500';
      case 'info':
      default:
        return 'bg-dark-800 border-l-4 border-blue-500';
    }
  };

  return (
    <div
      className={`${getColors()} text-white p-4 rounded shadow-2xl flex items-start gap-3 min-w-[300px] animate-[slideIn_0.3s_ease-out]`}
    >
      {getIcon()}
      <div className="flex-1">
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs text-slate-400 mt-0.5">{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="text-slate-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

