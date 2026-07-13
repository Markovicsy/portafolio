const html = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeBtn.addEventListener("click", function () {
  const actual = html.getAttribute("data-bs-theme");
  const nuevo = actual === "dark" ? "light" : "dark";
  html.setAttribute("data-bs-theme", nuevo);
  if (nuevo === "dark") {
    themeIcon.className = "bi bi-sun";
    themeBtn.innerHTML = '<i class="bi bi-sun" id="theme-icon"></i> Modo claro';
  } else {
    themeIcon.className = "bi bi-moon-stars";
    themeBtn.innerHTML = '<i class="bi bi-moon-stars" id="theme-icon"></i> Modo oscuro';
  }
});

const hora = new Date().getHours();
let saludo = "Buenas noches";
if (hora >= 5 && hora < 12) {
  saludo = "Buenos días";
} else if (hora >= 12 && hora < 19) {
  saludo = "Buenas tardes";
}
document.getElementById("welcome-message").textContent = saludo + ", bienvenido a mi portafolio.";

function mostrarFecha() {
  const ahora = new Date();
  const opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
  document.getElementById("footer-datetime").textContent = ahora.toLocaleDateString("es-ES", opciones);
}
mostrarFecha();
setInterval(mostrarFecha, 1000);

const form = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();

  if (form.checkValidity()) {
    formSuccess.classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
    setTimeout(function () {
      formSuccess.classList.add("d-none");
    }, 4000);
  } else {
    formSuccess.classList.add("d-none");
  }

  form.classList.add("was-validated");
});

const proyectos = [
  {
    nombre: "Calculadora Básica",
    descripcion: "Proyecto hecho en clase: calculadora con las 4 operaciones básicas usando Bootstrap y JavaScript.",
    icono: "bi-calculator",
    demo: "proyectos/calculadora.html"
  }
];

const contenedor = document.getElementById("projects-container");

proyectos.forEach(function (p) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";
  col.innerHTML =
    '<div class="card h-100">' +
      '<div class="card-body text-center">' +
        '<i class="bi ' + p.icono + ' fs-1 text-primary mb-3"></i>' +
        '<h5 class="card-title">' + p.nombre + '</h5>' +
        '<p class="card-text">' + p.descripcion + '</p>' +
        '<a href="' + p.demo + '" class="btn btn-primary btn-sm" target="_blank">Ver demo</a>' +
      '</div>' +
    '</div>';
  contenedor.appendChild(col);
});
