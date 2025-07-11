import { Routes, Route } from 'react-router-dom';
import ShortenerForm from './components/ShortenerForm';
import Redirector from './pages/Redirector'; // you'll create this next

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4 pt-16 pb-6">
            <div className="w-full max-w-3xl text-center mb-6 px-2">
              <h2 className="text-lg sm:text-3xl font-bold tracking-tight leading-snug text-gray-200 uppercase">
                <span className="text-red-400 uppercase">Paste</span> your long
                <span className="text-red-400 uppercase"> URLs</span> and get sleek, shareable links instantly!
              </h2>
            </div>
            <div className="w-full max-w-md sm:max-w-xl">
              <ShortenerForm />
            </div>
            <footer className="text-center mt-10 text-sm sm:text-lg text-gray-300 font-medium tracking-wide px-2">
              <span className="uppercase text-pink-400 font-semibold">Built by</span>{' '}
              <span className="text-white font-bold tracking-wider">Lakshaya Papnai</span> •{' '}
              <a
                href="https://github.com/lakshaya-papnai"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-300 hover:text-pink-300 underline transition-colors duration-300"
              >
                GitHub
              </a>
            </footer>
          </div>
        }
      />
      <Route path="/r/:slug" element={<Redirector />} />
    </Routes>
  );
}

export default App;
