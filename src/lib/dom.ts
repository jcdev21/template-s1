export function setDomCollapse() {
  const sidebar = document.documentElement.querySelector('.sidebar');
  if (sidebar?.classList.contains('x-collapse')) sidebar?.classList.remove('x-collapse');
  else sidebar?.classList.add('x-collapse');
}

export function setDomNavigate(elemen: HTMLElement) {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(navItem => {
    if (elemen.nextElementSibling?.classList.contains('submenu')) {
      if (navItem.nextElementSibling?.classList.contains('submenu') && navItem !== elemen)
        navItem.classList.remove('active');
      return;
    }

    if (elemen !== navItem) navItem.classList.remove('active');
  });

  if (elemen.classList.contains('active')) elemen.classList.remove('active');
  else elemen.classList.add('active');
}
