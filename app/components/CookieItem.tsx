'use client';

import { Copy } from 'lucide-react';
import { Cookie } from '@/app/types';
import { useToast } from './ToastContext';

interface CookieItemProps {
  cookie: Cookie;
  onCopy?: (value: string) => void;
  variant?: 'admin' | 'user';
}

export default function CookieItem({ cookie, onCopy, variant = 'user' }: CookieItemProps) {
  const { showToast } = useToast();

  const handleCopy = async () => {
    const textToCopy = cookie.value;

    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        if (onCopy) {
          onCopy(textToCopy);
        } else {
          showToast('Copied!', 'Cookie value copied to clipboard.', 'success');
        }
        return;
      } catch (err) {
        // Fall through to fallback method
      }
    }

    // Fallback: Use execCommand for older browsers or when clipboard API fails
    try {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        if (onCopy) {
          onCopy(textToCopy);
        } else {
          showToast('Copied!', 'Cookie value copied to clipboard.', 'success');
        }
      } else {
        throw new Error('execCommand failed');
      }
    } catch (err) {
      showToast('Error', 'Failed to copy to clipboard. Please try manually selecting the text.', 'error');
    }
  };

  if (variant === 'admin') {
    return (
      <div className="bg-dark-900 p-2 rounded border border-slate-700 flex justify-between items-center group/cookie">
        <div className="overflow-hidden mr-2 flex-1">
          <div className="text-xs text-brand-400 font-semibold truncate">{cookie.name}</div>
          <div className="text-[10px] text-slate-500 truncate font-mono">value hidden</div>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded border border-slate-600 transition-colors flex items-center gap-1 flex-shrink-0"
        >
          <Copy className="w-3 h-3" />
          Copy
        </button>
      </div>
    );
  }

  return (
    <div className="bg-dark-900 p-2.5 rounded border border-slate-700 flex justify-between items-center">
      <div className="text-xs font-medium text-slate-300 truncate w-1/2">{cookie.name}</div>
      <button
        onClick={handleCopy}
        className="text-xs bg-brand-600/10 hover:bg-brand-600/30 text-brand-400 hover:text-brand-300 border border-brand-600/30 px-3 py-1.5 rounded transition-all flex items-center gap-1 font-semibold flex-shrink-0"
      >
        <Copy className="w-3 h-3" />
        Copy
      </button>
    </div>
  );
}

