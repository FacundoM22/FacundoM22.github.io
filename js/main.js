// Función para cargar componentes HTML externos
function loadComponent(url, elementId) {
  return fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error("Error cargando " + url, err));
}

// Cargamos todos los componentes primero
Promise.all([
  loadComponent("components/header.html", "header"),
  loadComponent("components/hero.html", "hero"),
  loadComponent("components/projects.html", "projects"),
  loadComponent("components/skills.html", "skills"),
  loadComponent("components/contact.html", "contact"),
  loadComponent("components/footer.html", "footer")
])
.then(() => {
  console.log("Todos los componentes cargados.");

  // Solo ahora cargamos TU script principal
  const script = document.createElement("script");
  script.src = "js/script.js";
  document.body.appendChild(script);
});
