const semestres = {
  "1° SEMESTRE": [
    "Introducción al Derecho",
    "Historia del Derecho",
    "Derecho Romano I",
    "Filosofía"
  ],
  "2° SEMESTRE": [
    "Derecho Romano II",
    "Derecho Constitucional I",
    "Teoría General del Derecho",
    "Taller de Comunicación"
  ],
  "3° SEMESTRE": [
    "Derecho Procesal I",
    "Derecho Penal I",
    "Derecho Civil I",
    "Derecho Constitucional II"
  ],
  "4° SEMESTRE": [
    "Derecho Procesal II",
    "Derecho Penal II",
    "Derecho Civil II",
    "Derecho Constitucional III"
  ],
  "5° SEMESTRE": [
    "Derecho Procesal III",
    "Derecho Penal III",
    "Derecho Civil III",
    "Derecho Administrativo I"
  ],
  "6° SEMESTRE": [
    "Derecho Procesal IV",
    "Derecho Civil IV",
    "Derecho Administrativo II",
    "Derecho Comercial I"
  ],
  "7° SEMESTRE": [
    "Derecho Civil V",
    "Derecho Comercial II",
    "Derecho Tributario I",
    "Electivo I"
  ],
  "8° SEMESTRE": [
    "Derecho Civil VI",
    "Derecho Comercial III",
    "Derecho Tributario II",
    "Electivo II"
  ],
  "9° SEMESTRE": [
    "Derecho Civil VII",
    "Clínica Jurídica I",
    "Electivo III"
  ],
  "10° SEMESTRE": [
    "Clínica Jurídica II",
    "Seminario de Investigación",
    "Examen de Grado"
  ]
};

const container = document.getElementById('malla');

Object.entries(semestres).forEach(([semestre, ramos]) => {
  const h3 = document.createElement('h3');
  h3.textContent = semestre;
  container.append(h3);

  ramos.forEach(name => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    div.textContent = name;
    const id = name.replace(/\s/g, '_');
    div.dataset.id = id;
    if (localStorage.getItem(id) === 'done') div.classList.add('done');
    div.onclick = () => {
      div.classList.toggle('done');
      if (div.classList.contains('done')) localStorage.setItem(id,'done');
      else localStorage.removeItem(id);
    };
    container.append(div);
  });

  container.append(document.createElement("br"));
});
