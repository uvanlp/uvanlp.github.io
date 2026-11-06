(function () {
  var themeToggle = document.querySelector('[data-theme-toggle]');
  if (!themeToggle) {
    return;
  }

  var themeIcon = themeToggle.querySelector('[data-theme-icon]');
  var themeLabel = themeToggle.querySelector('[data-theme-label]');

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    var isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' theme');
    themeToggle.setAttribute('title', 'Switch to ' + (isDark ? 'light' : 'dark') + ' theme');
    themeIcon.textContent = isDark ? '☀' : '☾';
    themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
  }

  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

  themeToggle.addEventListener('click', function () {
    var nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try {
      localStorage.setItem('ilp-theme', nextTheme);
    } catch (error) {
      console.warn('Theme preference could not be saved to local storage.', error);
    }
  });
})();
