import { setDomCollapse, setDomNavigate } from '@/lib/dom';
import { useEffect, useState } from 'react';

type ThemeConfig = {
  theme: string;
  collapse: boolean;
};

function getConfig(): ThemeConfig {
  return JSON.parse(localStorage.getItem('theme-config')!) as ThemeConfig;
}

export function useTheme() {
  const [theme, _setTheme] = useState(''); // delete this state, if you don't need theme state in app

  useEffect(() => {
    const config = getConfig();
    if (config?.theme !== null) {
      _setTheme(config?.theme);
    }

    // uncomment when to push or build production, mode dev not work because strict mode dev react
    if (config?.collapse) {
      setDomCollapse();
    }
  }, []);

  function setTheme(newTheme: string) {
    const currentConfig = getConfig();
    localStorage.setItem('theme-config', JSON.stringify({ ...currentConfig, theme: newTheme }));
    document.documentElement.className = newTheme;
    _setTheme(newTheme);
  }

  function toggleCollapse() {
    const currentConfig = getConfig();
    localStorage.setItem('theme-config', JSON.stringify({ ...currentConfig, collapse: !currentConfig?.collapse }));
    setDomCollapse();
  }

  function setNavigate(elemen: HTMLElement) {
    setDomNavigate(elemen);
  }

  return { theme, setTheme, toggleCollapse, setNavigate };
}
