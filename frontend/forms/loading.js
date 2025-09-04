
  window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Adiciona a classe hidden para fazer o fade-out
    loadingScreen.classList.add('hidden');

    // Mostra o conteúdo do site
    mainContent.style.display = 'block';
  });
