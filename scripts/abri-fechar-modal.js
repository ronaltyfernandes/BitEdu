  function initMobileMenu(btnId, menuId, closeId) {
    const btnMenu = document.getElementById(btnId);
    const menuMobile = document.getElementById(menuId);
    const closeMenu = document.getElementById(closeId);

    if (!btnMenu || !menuMobile || !closeMenu) {
      console.error("IDs inválidos ao inicializar o menu mobile.");
      return;
    }

    btnMenu.addEventListener("click", () => {
      menuMobile.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
      menuMobile.classList.remove("open");
    });
  }

  // Inicialização
  initMobileMenu("btn-menu", "menu-mobile", "close-menu");