import { useState } from 'react';

export default function ShortenedLink({ original, short }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(short);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] gap-2 sm:gap-0">
      <div className="flex-1 overflow-hidden">
        <p className="text-xs sm:text-sm break-words">
          <span className="font-bold text-gray-800 mr-2">Original:</span>{' '}
          <span className="font-semibold text-white/90">{original}</span>
        </p>
        <p className="text-xs sm:text-sm break-words mt-1">
          <span className="font-bold text-gray-800 mr-6">Short:</span>{' '}
          <a href={short} target="_blank" rel="noreferrer" className="font-semibold underline text-white/90">
            {short}
          </a>
        </p>
      </div>

      <button
        onClick={handleCopy}
        className={`h-10 px-4 text-xs sm:text-sm font-medium rounded-md transition-colors ${
          copied
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-white/50 bg-opacity-20 hover:bg-opacity-30 text-black'
        }`}
      >
        {copied ? '✔ Copied!' : '📋 Copy'}
      </button>
    </div>
  );
}
