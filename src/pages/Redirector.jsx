import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function Redirector() {
  const { slug } = useParams();

  useEffect(() => {
    async function redirect() {
      try {
        const response = await axios.get(`https://url-shortener-backend-6666.onrender.com/${slug}`, {
          responseType: 'text' // tell axios to read as raw text
        });

        const originalUrl = response.data;

        if (originalUrl.startsWith('http')) {
          window.location.replace(originalUrl); // 🚀 true redirect
        } else {
          window.location.href = '/404';
        }
      } catch {
        window.location.href = '/404';
      }
    }
    redirect();
  }, [slug]);

  return (
    <p className="text-center mt-10 text-pink-300 text-lg animate-pulse">
      🔗 Redirecting to original URL...
    </p>
  );
}
