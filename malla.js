const cursos = {
  "DIS 111": { nombre: "Taller de Diseño I", prereq: [], aprobado: false },
  "DIS 121": { nombre: "Taller de Diseño II", prereq: ["DIS 111"], aprobado: false },
  "DIS 211": { nombre: "Taller de Diseño III", prereq: ["DIS 121"], aprobado: false },
  "DIS 221": { nombre: "Taller de Diseño IV", prereq: ["DIS 211"], aprobado: false },
  "DIS 311": { nombre: "Taller de Productos I", prereq: ["DIS 221"], aprobado: false },
  "DIS 321": { nombre: "Taller de Productos II", prereq: ["DIS 311"], aprobado: false },
  "DIS 411": { nombre: "Taller Proyectos I", prereq: ["DIS 321"], aprobado: false },
  "DIS 421": { nombre: "Taller Proyectos II", prereq: ["DIS 411"], aprobado: false },
  "DIS 511": { nombre: "Taller Título I", prereq: ["DIS 421"], aprobado: false },
  "DIS 521": { nombre: "Taller Título II", prereq: ["DIS 511"], aprobado: false },
};

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  for (const codigo in cursos) {
    const curso = cursos[codigo];
    const aprobado = curso.aprobado;
    const prereq = curso.prereq;
    const habilitado = prereq.every(id => cursos[id].aprobado);

    const div = document.createElement("div");
    div.className = \`curso \${aprobado ? "aprobado" : ""} \${!habilitado && !aprobado ? "bloqueado" : ""}\`;
    div.innerHTML = \`
      <strong>\${codigo}</strong><br/>
      \${curso.nombre}
      <br/>
      <input type="number" placeholder="Nota" min="1" max="7" step="0.1" />
      <br/>
      <button \${!habilitado && !aprobado ? "disabled" : ""}>Aprobar</button>
    \`;

    div.querySelector("button").onclick = () => {
      curso.aprobado = true;
      renderMalla();
    };

    container.appendChild(div);
  }
}

renderMalla();
