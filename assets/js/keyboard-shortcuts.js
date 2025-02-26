class KeyboardShortcuts {
  static initialize() {
      document.addEventListener('keydown', (e) => {
          // Alt + L: Tema Claro
          if (e.altKey && e.key === 'l') {
              document.documentElement.setAttribute('data-theme', 'light');
          }
          // Alt + D: Tema Escuro
          if (e.altKey && e.key === 'd') {
              document.documentElement.setAttribute('data-theme', 'dark');
          }
          // Alt + H: Tema Alto Contraste
          if (e.altKey && e.key === 'h') {
              document.documentElement.setAttribute('data-theme', 'high-contrast');
          }
      });
  }
}