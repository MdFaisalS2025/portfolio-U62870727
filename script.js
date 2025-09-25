(function(){
  const saved = localStorage.getItem('theme');
  if(saved){ document.documentElement.classList.toggle('light', saved === 'light'); }
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const nowLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', nowLight ? 'light' : 'dark');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();