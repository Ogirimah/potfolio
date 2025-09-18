import './App.css';
import './theme.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import TicTacToe from './components/TicTacToe';
import { createContext, useState } from 'react';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  const [showTicTacToe, setShowTicTacToe] = useState(false);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const toggleTicTacToe = () => {
    setShowTicTacToe(!showTicTacToe);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleTicTacToe, showTicTacToe }}>
      <div className="App" id={theme}>
        <div className="background">
          <Navbar />
          <Main />
          <Footer />
          {showTicTacToe && <TicTacToe />}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;