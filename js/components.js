// Componentes reutilizables para el menú
function menuCardComponent(item) {
  return `
    <div class="col-lg-4 col-md-6">
      <div class="menu-card">
        <img src="${item.imagen}" alt="${item.nombre}" class="menu-card-img">
        <div class="menu-card-body">
          <h5 class="menu-card-title">${item.nombre}</h5>
          <p class="menu-card-description">${item.descripcion}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="menu-card-price">$${item.precio.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
// Header de sección reutilizable
function sectionHeaderComponent({ iconClass, iconColorClass, titulo, subtitulo }) {
  return `
    <div class="category-header">
      <h2><i class="${iconClass} ${iconColorClass} me-2"></i>${titulo}</h2>
      <p class="lead">${subtitulo}</p>
    </div>
  `;
}

// Banner de promoción reutilizable
function promoBannerComponent({ iconClass, iconColorClass, titulo, lineas }) {
  return `
    <div class="promo-banner">
      <h3><i class="${iconClass} ${iconColorClass}"></i> ${titulo}</h3>
      ${lineas.map(linea => `<p class="mb-0">${linea}</p>`).join('')}
    </div>
  `;
}
// Puedes crear más componentes si lo necesitas (por ejemplo, para promos, banners, etc.)
