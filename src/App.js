import './App.css';
import './theme.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { createContext, useState, useEffect } from 'react';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  // Detect system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    // Set initial theme based on system preference
    setTheme(mediaQuery.matches ? 'light' : 'dark');

    // Listen for system theme changes
    const handleChange = (e) => {
      setTheme(e.matches ? 'light' : 'dark');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <div className="background">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;