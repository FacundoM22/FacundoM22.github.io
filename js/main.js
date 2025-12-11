async function loadComponent(id, file) {
  const container = document.getElementById(id);
  const response = await fetch(`components/${file}`);
  const content = await response.text();
  container.innerHTML = content;
}

loadComponent("header", "header.html");
loadComponent("hero", "hero.html");
loadComponent("projects", "projects.html");
loadComponent("skills", "skills.html");
loadComponent("contact", "contact.html");
loadComponent("footer", "footer.html");
