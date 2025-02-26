class IdleDetector {
  constructor(timeout = 1800000) { // 30 minutos
      this.timeout = timeout;
      this.timeoutId = null;
      this.setupListeners();
  }

  setupListeners() {
      const resetTimer = () => {
          clearTimeout(this.timeoutId);
          this.timeoutId = setTimeout(() => {
              const currentHour = new Date().getHours();
              if (currentHour >= 20 || currentHour < 6) {
                  document.documentElement.setAttribute('data-theme', 'dark');
              }
          }, this.timeout);
      };

      ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
          .forEach(evt => document.addEventListener(evt, resetTimer));
  }
}