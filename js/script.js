document.addEventListener("DOMContentLoaded", function () {
    const navList = document.getElementById("nav-items");
    const nav = document.querySelector('nav');

    // Dados do menu de navegação
    const navItems = [
        { name: 'Início', href: '#' },
        { name: 'Minhas Skills', href: '#' },
        {
            name: 'Projetos', href: '#', dropdown: [
                { name: 'Projeto 1', href: '#' },
                { name: 'Projeto 2', href: '#' },
                { name: 'Projeto 3', href: '#' }
            ]
        }
    ];

    // Adiciona itens ao menu de navegação
    navItems.forEach(item => {
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

    // Adiciona efeito de scroll na barra de navegação
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.boxShadow = 'none';
        }
    });

    // Adiciona a seção "Sobre Mim"
    const aboutSection = document.getElementById("about-section");
    const row = document.createElement("div");
    row.classList.add("row", "align-items-center");

    const colText = document.createElement("div");
    colText.classList.add("col-12", "col-lg-6");

    

    const colImage = document.createElement("div");
    colImage.classList.add("col-12", "col-lg-6");

    

    document.addEventListener("DOMContentLoaded", function () {
        const interactiveImage = document.getElementById("interactive-image");
    
        interactiveImage.addEventListener("mouseover", function () {
            interactiveImage.src = "https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif"; // URL do GIF interativo
        });
    
        interactiveImage.addEventListener("mouseout", function () {
            interactiveImage.src = "https://via.placeholder.com/300"; // URL da imagem estática
        });
    });
    

    aboutSection.appendChild(row);
});
