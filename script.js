const ramos = [
  'Derecho Romano I', 'Derecho Romano II',
  'Derecho Procesal I', 'Derecho Procesal II', 'Derecho Procesal III', 'Derecho Procesal IV',
  'Derecho Penal I', 'Derecho Penal II', 'Derecho Penal III',
  'Derecho Civil I', 'Derecho Civil II', 'Derecho Civil III', 'Derecho Civil IV', 'Derecho Civil V', 'Derecho Civil VI', 'Derecho Civil VII',
  'Derecho Constitucional I', 'Derecho Constitucional II', 'Derecho Constitucional III',
  'Derecho Administrativo I', 'Derecho Administrativo II',
  'Derecho Comercial I', 'Derecho Comercial II', 'Derecho Comercial III',
  'Derecho Tributario I', 'Derecho Tributario II',
  'Clínica de Litigación', 'Clínica Institucional',
  'Examen de grado', 'Seminario de investigación',
  'Filosofía del Derecho', 'Historia del Derecho', 'Teoría General del Derecho',
  'Fuentes, Interpretación y Argumentación', 'Ética Profesional',
  'Negociación, Mediación y Arbitraje', 'Investigación Jurídica',
  'Bases del Derecho Público', 'Filosofía', 'Electivos'
];

const container = document.getElementById('malla');
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
