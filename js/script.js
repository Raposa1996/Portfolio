document.addEventListener("DOMContentLoaded", function () {
    const navList = document.getElementById("nav-items");
    const nav = document.querySelector('nav');

  
 
    // Função para adicionar itens ao menu de navegação
    function addNavItems(items) {
        items.forEach(item => {
            if (item.dropdown) {
                const dropdown = document.createElement("li");
                dropdown.classList.add("nav-item", "dropdown");

                const dropdownLink = document.createElement("a");
                dropdownLink.classList.add("nav-link", "dropdown-toggle", "hover-effect");
                dropdownLink.href = item.href;
                dropdownLink.setAttribute("role", "button");
                dropdownLink.setAttribute("data-bs-toggle", "dropdown");
                dropdownLink.innerText = item.name;
                dropdown.appendChild(dropdownLink);

                const dropdownMenu = document.createElement("ul");
                dropdownMenu.classList.add("dropdown-menu");
                item.dropdown.forEach(subItem => {
                    const dropdownItem = document.createElement("li");
                    const link = document.createElement("a");
                    link.classList.add("dropdown-item", "hover-effect");
                    link.href = subItem.href;
                    link.innerText = subItem.name;
                    dropdownItem.appendChild(link);
                    dropdownMenu.appendChild(dropdownItem);
                });
                dropdown.appendChild(dropdownMenu);
                navList.appendChild(dropdown);
            } else {
                const navItem = document.createElement("li");
                navItem.classList.add("nav-item");

                const link = document.createElement("a");
                link.classList.add("nav-link", "hover-effect");
                link.href = item.href;
                link.innerText = item.name;
                navItem.appendChild(link);
                navList.appendChild(navItem);
            }
        });
    }

    // Adiciona os itens de navegação ao menu
    addNavItems(navItems);

    // Efeito de scroll na navbar: alteração de estilo
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');  // Adiciona a classe scrolled
        } else {
            nav.classList.remove('scrolled');  // Remove a classe scrolled
        }
    });
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});


