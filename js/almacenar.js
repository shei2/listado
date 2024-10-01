// Función para cargar el listado desde localStorage y actualizar la vista
function cargarListado() {
    const listadoGuardado = localStorage.getItem('listado');
    const listado = listadoGuardado ? JSON.parse(listadoGuardado) : [];
    
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = ''; // Limpiar la vista
  
    listado.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = item;
      contenedor.appendChild(li);
    });
  }
  
  // Función para agregar un ítem al listado y actualizar localStorage
  function agregarItem() {
    const input = document.getElementById('item');
    const nuevoItem = input.value.trim();
  
    if (nuevoItem) {
      let listado = localStorage.getItem('listado') ? JSON.parse(localStorage.getItem('listado')) : [];
      listado.push(nuevoItem);
  
      // Guardar el listado actualizado en localStorage
      localStorage.setItem('listado', JSON.stringify(listado));
  
      // Actualizar la vista
      cargarListado();
  
      // Limpiar el campo de entrada
      input.value = '';
    }
  }
  
  // Función para limpiar el listado y localStorage
  function limpiarListado() {
    localStorage.removeItem('listado');
    cargarListado(); // Actualizar la vista para reflejar que se ha limpiado
  }
  
  // Asignar eventos a los botones
  document.getElementById('agregar').addEventListener('click', agregarItem);
  document.getElementById('limpiar').addEventListener('click', limpiarListado);
  
  // Cargar el listado al iniciar la página
  window.onload = cargarListado;
  