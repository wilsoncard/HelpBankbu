    // Función para cerrar el menú
function closeMenu() {
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");
    var footer = document.querySelector("footer");
    nav.style.left = "-250px";
    body.classList.remove("menu-opened");
    footer.classList.remove("menu-opened");
}

// Función para abrir el menú
function openMenu() {
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");
    var footer = document.querySelector("footer");
    nav.style.left = "0";
    body.classList.add("menu-opened");
    footer.classList.add("menu-opened");
}
            document.getElementById("menuBtn").addEventListener("click", function (e) {
                e.stopPropagation(); // Evita que el clic se propague al documento
                var nav = document.querySelector("nav");
                if (nav.style.left === "-250px") {
                    openMenu();
                } else {
                    closeMenu();
                }
            });
    // Agregar evento de clic a las opciones principales
document.addEventListener("DOMContentLoaded", function () {
  // Obtén todas las opciones principales
  var opcionesPrincipales = document.querySelectorAll('.opcion-principal');

  // Itera sobre ellas para agregar un evento de clic
  opcionesPrincipales.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      // Obtén el submenú de la opción actual
      var subMenu = opcion.querySelector('.sub-menu');

      // Alternar la visibilidad del submenú
      if (subMenu) {
        subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'block' : 'none';
      }
    });
  });
});
            // Cerrar el men� al hacer clic fuera de �l
            document.addEventListener("click", function () {
                closeMenu();
            });
    
            // Evitar que el clic se propague desde el men� al documento
            document.querySelector("nav").addEventListener("click", function (e) {
                e.stopPropagation();
            });