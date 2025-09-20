// render-menu.js
// Renderiza dinámicamente todas las secciones del menú usando los componentes y los datos
$(document).ready(function() {
  // Renderizar Platos Principales
  $('#almuerzos-list').html(
    menuData.platosPrincipales.map(menuCardComponent).join('')
  );

  // Renderizar Entrantes
  $('#entrantes-list').html(
    menuData.entrantes.map(menuCardComponent).join('')
  );

  // Renderizar Desayunos
  $('#desayunos-list').html(
    menuData.desayunos.map(menuCardComponent).join('')
  );

  // Renderizar Bebidas
  $('#bebidas-list').html(
    menuData.bebidas.map(menuCardComponent).join('')
  );

  // Renderizar Cervezas
  $('#cervezas-list').html(
    menuData.cervezas.map(menuCardComponent).join('')
  );
});
