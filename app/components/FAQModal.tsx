'use client';

import { useState } from 'react';
import { X, HelpCircle, Search, Copy, RefreshCw } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const [activeTab, setActiveTab] = useState<'credentials' | 'simple' | 'full'>('credentials');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-dark-800 border border-slate-700 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-[fadeIn_0.3s_ease-out]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-brand-400" />
            Tutorial & Panduan
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700 bg-dark-900">
          <button
            onClick={() => setActiveTab('credentials')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'credentials'
                ? 'bg-dark-800 text-brand-400 border-b-2 border-brand-500'
                : 'text-slate-400 hover:text-white hover:bg-dark-800/50'
            }`}
          >
            <Search className="w-4 h-4" />
            Credentials
          </button>
          <button
            onClick={() => setActiveTab('simple')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'simple'
                ? 'bg-dark-800 text-brand-400 border-b-2 border-brand-500'
                : 'text-slate-400 hover:text-white hover:bg-dark-800/50'
            }`}
          >
            <Copy className="w-4 h-4" />
            Simple
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'full'
                ? 'bg-dark-800 text-brand-400 border-b-2 border-brand-500'
                : 'text-slate-400 hover:text-white hover:bg-dark-800/50'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            Full
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'credentials' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Search className="w-5 h-5 text-purple-400" />
                  Cara Menggunakan Credentials (Email & Password)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Tutorial ini akan membantu Anda menggunakan email dan password yang di-share dari aplikasi ini untuk login ke website tujuan.
                </p>
              </div>

              <div className="bg-dark-900 border border-slate-700 rounded-lg p-4 space-y-3">
                <h4 className="text-sm font-semibold text-brand-300">Langkah-langkah:</h4>
                <ol className="list-decimal list-inside space-y-3 text-sm text-slate-300">
                  <li>
                    <span className="font-medium text-white">Ke Website</span>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-400">
                      <li>Buka website atau aplikasi tujuan di browser Anda</li>
                      <li>Pastikan Anda berada di halaman utama website tersebut</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium text-white">Click Login</span>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-400">
                      <li>Cari dan klik tombol <span className="text-yellow-400">"Login"</span> atau <span className="text-yellow-400">"Sign In"</span></li>
                      <li>Anda akan diarahkan ke halaman login</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium text-white">Paste Sesuai dengan Valuenya</span>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-400">
                      <li>Di halaman login, cari field <span className="text-yellow-400">"Email"</span> atau <span className="text-yellow-400">"Username"</span></li>
                      <li>Copy email/username dari aplikasi ini (dari entry yang di-share admin)</li>
                      <li>Paste email/username tersebut ke field email di website tujuan</li>
                      <li>Copy password dari aplikasi ini</li>
                      <li>Paste password tersebut ke field password di website tujuan</li>
                      <li>Klik tombol <span className="text-yellow-400">"Login"</span> atau <span className="text-yellow-400">"Sign In"</span> untuk masuk</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                <p className="text-xs text-blue-300">
                  <strong className="text-blue-200">Tips:</strong> Pastikan Anda menyalin email dan password dengan benar. Satu karakter yang salah bisa membuat login gagal.
                </p>
              </div>

              <div className="bg-dark-900 border border-slate-700 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-brand-300 mb-2">Contoh:</h4>
                <div className="text-xs text-slate-400 font-mono bg-dark-800 p-3 rounded border border-slate-700 space-y-1">
                  <div>Dari aplikasi ini:</div>
                  <div className="ml-4">Email: <span className="text-white">user@example.com</span></div>
                  <div className="ml-4">Password: <span className="text-white">********</span></div>
                  <div className="mt-2 text-green-400">↓ Paste ke website tujuan ↓</div>
                  <div className="mt-2">Field Email: <span className="text-white">user@example.com</span></div>
                  <div>Field Password: <span className="text-white">********</span></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'simple' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Copy className="w-5 h-5 text-red-400" />
                  Cara Copy & Paste Cookie
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Setelah menemukan cookie di browser, ikuti langkah-langkah berikut untuk menyalin dan menggunakan cookie tersebut.
                </p>
              </div>

              <div className="bg-dark-900 border border-slate-700 rounded-lg p-4 space-y-3">
                <h4 className="text-sm font-semibold text-brand-300">Langkah-langkah:</h4>
                <ol className="list-decimal list-inside space-y-3 text-sm text-slate-300">
                  <li>
                    <span className="font-medium text-white">Copy Cookie Value</span>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-400">
                      <li>Di Developer Tools → Application → Cookies, klik pada cookie yang Anda butuhkan</li>
                      <li>Copy nilai dari kolom <span className="text-yellow-400">"Value"</span> atau <span className="text-yellow-400">"Nilai"</span></li>
                      <li>Anda bisa klik kanan pada value dan pilih <span className="text-yellow-400">"Copy"</span> atau tekan <span className="text-yellow-400 font-mono">Ctrl+C</span></li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium text-white">Paste ke Aplikasi Tujuan</span>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-400">
                      <li>Buka aplikasi atau website tujuan di tab baru</li>
                      <li>Buka Developer Tools di aplikasi tujuan (F12 atau klik kanan → Inspect)</li>
                      <li>Masuk ke Application → Cookies → pilih domain yang sesuai</li>
                      <li>Klik pada cookie yang sesuai atau buat cookie baru</li>
                      <li>Paste nilai yang sudah Anda copy tadi ke kolom <span className="text-yellow-400">"Value"</span> atau <span className="text-yellow-400">"Nilai"</span></li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium text-white">Ulangi untuk Semua Cookie</span>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-400">
                      <li>Lakukan langkah yang sama untuk semua cookie yang diperlukan</li>
                      <li>Pastikan nama cookie (Name) juga sesuai dengan yang ada di aplikasi tujuan</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                <p className="text-xs text-blue-300">
                  <strong className="text-blue-200">Penting:</strong> Pastikan Anda menyalin dan menempelkan cookie dengan benar. Salah satu karakter pun bisa membuat cookie tidak berfungsi.
                </p>
              </div>

              <div className="bg-dark-900 border border-slate-700 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-brand-300 mb-2">Contoh:</h4>
                <div className="text-xs text-slate-400 font-mono bg-dark-800 p-3 rounded border border-slate-700 space-y-1">
                  <div>Cookie Name: <span className="text-white">session_token</span></div>
                  <div>Cookie Value (dari aplikasi ini): <span className="text-white">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</span></div>
                  <div className="mt-2 text-green-400">↓ Paste ke aplikasi tujuan ↓</div>
                  <div className="mt-2">Cookie Name: <span className="text-white">session_token</span></div>
                  <div>Cookie Value (di aplikasi tujuan): <span className="text-white">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</span></div>
                </div>
              </div>
            </div>
          )}

{activeTab === 'full' && (
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-blue-400" />
        Langkah Terakhir
      </h3>
      <p className="text-slate-300 text-sm leading-relaxed">
        Setelah selesai copy-paste semua cookie, ikuti 3 langkah mudah ini untuk menyelesaikan prosesnya.
      </p>
    </div>

    <div className="bg-dark-900 border border-slate-700 rounded-lg p-4 space-y-4">
      <h4 className="text-sm font-semibold text-brand-300">3 Langkah Mudah:</h4>
      
      <div className="space-y-4">
        {/* Langkah 1 */}
        <div className="flex gap-3">
          <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
          <div>
            <p className="font-medium text-white mb-2">Cek Sekali Lagi</p>
            <p className="text-sm text-slate-300">
              Pastikan semua cookie sudah berhasil di-copy paste. Lihat apakah nama dan nilainya sudah benar semua.
            </p>
          </div>
        </div>

        {/* Langkah 2 */}
        <div className="flex gap-3">
          <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
          <div>
            <p className="font-medium text-white mb-2">Tutup Jendela Inspect</p>
            <p className="text-sm text-slate-300">
              Tutup jendela inspect yang tadi dibuka. Caranya tekan tombol <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 font-mono rounded">F12</span> atau klik tombol X di pojok jendela.
            </p>
          </div>
        </div>

        {/* Langkah 3 */}
        <div className="flex gap-3">
          <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
          <div>
            <p className="font-medium text-white mb-2">Muat Ulang Halaman</p>
            <p className="text-sm text-slate-300 mb-2">
              Muat ulang/refresh halaman website-nya. Ada 3 cara:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-slate-400">
              <li>Tekan tombol <span className="text-yellow-400 font-mono">F5</span></li>
              <li>Tekan <span className="text-yellow-400 font-mono">Ctrl+R</span> (Windows) atau <span className="text-yellow-400 font-mono">Cmd+R</span> (Mac)</li>
              <li>Klik tombol refresh ↻ di browser</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Tips jika tidak berhasil */}
    <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
      <p className="text-sm font-semibold text-yellow-200 mb-2">⚠️ Kalau Masih Belum Berhasil:</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-yellow-300">
        <li>Coba hapus cache browser dulu, lalu refresh lagi</li>
        <li>Periksa lagi apakah semua cookie sudah benar di-paste</li>
        <li>Pastikan Anda paste cookie di website yang benar</li>
      </ul>
    </div>

    {/* Peringatan waktu */}
    <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
      <p className="text-sm text-red-300">
        <strong className="text-red-200">⏰ Penting!</strong> Cookie di aplikasi ini akan otomatis hilang setelah 1 jam. Jadi selesaikan prosesnya sebelum waktu habis.
      </p>
    </div>

    {/* Ringkasan visual */}
    <div className="bg-dark-900 border border-slate-700 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-brand-300 mb-3">Ringkasan Singkat:</h4>
      <div className="text-sm text-slate-300 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-brand-400 mt-1">✓</span>
          <span>Buka menu Inspect → Cari bagian Cookies</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-brand-400 mt-1">✓</span>
          <span>Copy nilai cookie dari sini</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-brand-400 mt-1">✓</span>
          <span>Paste ke website tujuan</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-brand-400 mt-1">✓</span>
          <span>Tutup Inspect → Refresh halaman → Selesai!</span>
        </div>
      </div>
    </div>

  </div>
)}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700 bg-dark-900">
          <button
            onClick={onClose}
            className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-2.5 rounded-lg transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

