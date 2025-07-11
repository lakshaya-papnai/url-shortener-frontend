import { useState } from 'react';
import axios from 'axios';
import ShortenedLink from './ShortenedLink';

export default function ShortenerForm() {
  const [url, setUrl] = useState('');
  const [shortLinks, setShortLinks] = useState([]);
  const [error, setError] = useState('');

  const handleShorten = async () => {
    if (shortLinks.length >= 5) {
      setError('You can only shorten up to 5 URLs.');
      return;
    }
    const urlRegex = /^(https?):\/\/[^ "]+$/;
    if (!urlRegex.test(url)) {
      setError('Please enter a valid URL (include http/https).');
      return;
    }
    try {
     const { data } = await axios.post('https://url-shortener-backend-6666.onrender.com/shorten', { url });
     setShortLinks((prev) => [data, ...prev]);
      setUrl('');
      setError('');
    } catch {
      setError('Failed to shorten URL.');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl px-4 py-6 sm:px-6 sm:py-8 transition-all duration-300">

      <h1 className="ml-20 text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        🔗 URL Shortener
      </h1>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          className="flex-1 h-12 px-4 text-sm sm:text-base bg-white/20 text-white placeholder-gray-300 rounded-lg border border-transparent focus:border-pink-500 focus:outline-none transition-all"

        />
        <button
          onClick={handleShorten}
          className="min-h-[3rem] sm:min-h-[3.5rem] px-6 bg-pink-600 hover:bg-pink-700 rounded-lg shadow-md text-white font-medium text-sm sm:text-base transition transform hover:scale-105 active:scale-95"

        >
          🔗 Shorten
        </button>
      </div>

      {error && (
        <p className="mt-4 text-center text-xs sm:text-sm text-red-400 animate-shake">
          {error}
        </p>
      )}

      <div className="mt-6 sm:mt-8 space-y-4">
        {shortLinks.map((link, i) => (
          <ShortenedLink key={i} original={link.original} short={link.short} />
        ))}
      </div>
    </div>
  );
}
