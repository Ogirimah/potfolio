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

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
        <div className="background">
            <Navbar />
            <Main />
            <Footer />
            <TicTacToe />
        </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
