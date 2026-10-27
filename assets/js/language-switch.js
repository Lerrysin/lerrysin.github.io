// Keep matching section anchors when switching between translated pages.
document.querySelectorAll('[data-language-switch]').forEach((link) => {
  const target = new URL(link.href, window.location.href);
  const updateTarget = () => {
    target.hash = window.location.hash;
    link.href = target.href;
  };
  updateTarget();
  window.addEventListener('hashchange', updateTarget);
});

document.getElementById('theme-toggle')?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    event.currentTarget.click();
  }
});
