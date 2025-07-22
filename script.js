document.addEventListener('DOMContentLoaded', () => {
  const prerrequisitos = {
    bioquimica: ['quimica'],
    microbiologia: ['biologia'],
    cicloVital: ['introduccionEnfermeria', 'anatomia'],
    comunicacionTecnologia: ['vidaUniversitaria'],
    fisiopatologia: ['anatomia', 'biologia'],
    saludPublica: ['basesSocioculturales'],
    habilidades: ['comunicacionTecnologia'],
    comunidad1: ['cicloVital'],
    educacionPromocion: ['basesSocioculturales', 'psicologia'],
    fundamentos: ['cicloVital', 'microbiologia'],
    ingles2: ['ingles1'],
    bioestadistica: ['estrategias'],
    farmacologia: ['microbiologia', 'fisiologia'],
    comunidad2: ['comunidad1', 'educacionPromocion'],
    enfermeriaBasicaAplicada: ['fundamentos', 'habilidades', 'fisiologia', 'saludPublica'],
    ingles3: ['ingles2'],
    comunidad3: ['comunidad2'],
    saludMental: ['enfermeriaBasicaAplicada', 'farmacologia'],
    medicoQuirurgico: ['enfermeriaBasicaAplicada', 'fisiopatologia', 'farmacologia'],
    complementarias: ['enfermeriaBasicaAplicada', 'farmacologia'],
    etica: ['enfermeriaBasicaAplicada', 'lideres'],
    metodologia1: ['bioestadistica'],
    conflictos: ['lideres'],
    // Continúa agregando el resto de los ramos aquí...
  };

  function requisitosCumplidos(id) {
    const reqs = prerrequisitos[id] || [];
    return reqs.every(r => document.getElementById(r)?.classList.contains('aprobado'));
  }

  function actualizarDisponibilidad() {
    document.querySelectorAll('.ramo').forEach(ramo => {
      const id = ramo.id;
      if (!ramo.classList.contains('aprobado')) {
        if (requisitosCumplidos(id)) {
          ramo.classList.remove('bloqueado');
        } else {
          ramo.classList.add('bloqueado');
        }
      }
    });
  }

  const ramos = document.querySelectorAll('.ramo');
  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      const id = ramo.id;
      if (!ramo.classList.contains('aprobado')) {
        if (!requisitosCumplidos(id)) {
          alert('Debes aprobar los prerrequisitos primero.');
          return;
        }
      }
      ramo.classList.toggle('aprobado');
      actualizarDisponibilidad();
    });
  });

  // Inicializar estado de ramos al cargar
  actualizarDisponibilidad();
});
