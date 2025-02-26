const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

class ThemeManager {
    constructor() {
        this.themes = ['light', 'dark', 'high-contrast'];
        this.defaultTheme = 'light';
        this.storageKey = 'preferred-theme';
        this.initialize();
    }

    initialize() {
        // Carregar tema salvo ou detectar preferência do sistema
        const savedTheme = localStorage.getItem(this.storageKey);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : this.defaultTheme);

        this.setTheme(initialTheme);
        this.setupListeners();
    }

    setTheme(theme) {
        // Validar tema
        if (!this.themes.includes(theme)) {
            theme = this.defaultTheme;
        }

        // Aplicar tema
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.storageKey, theme);

        // Atualizar botões
        this.updateButtons(theme);
    }

    updateButtons(activeTheme) {
        const buttons = document.querySelectorAll('.theme-btn');
        buttons.forEach(btn => {
            const btnTheme = btn.getAttribute('data-theme');
            btn.classList.toggle('active', btnTheme === activeTheme);
        });
    }

    setupListeners() {
        // Listener para os botões de tema
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.getAttribute('data-theme');
                this.setTheme(theme);
            });
        });

        // Listener para mudanças na preferência do sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem(this.storageKey)) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Inicializar gerenciador de temas
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});