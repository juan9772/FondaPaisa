const menuData = {
entrantes: [
    {
    nombre: 'Arepa con Chicharrón o Carne',
    descripcion: 'Arepa con chicharrón o carne de cerdo, con limón',
    precio: 7000,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // arepa con chicharrón
    },
    {
    nombre: 'Patacón',
    descripcion: 'Patacón con hogao, guacamole, queso, y carne, pollo o mixto',
    precio: 11000,
    imagen: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop' // patacón
    },
    {
    nombre: 'Arepa Rellena',
    descripcion: 'Arepa rellena con hogao carne, pollo o mixta y queso',
    precio: 9000,
    imagen: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=300&fit=crop' // arepa rellena (mantener, es arepa rellena)
    },
    {
    nombre: 'Buñuelo Colombiano',
    descripcion: 'Buñuelo de masa hecha de fécula de maíz y queso',
    precio: 1800,
    imagen: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=300&fit=crop' // buñuelo (mantener, es buñuelo)
    },
    {
    nombre: 'Dedito de Queso / Tequeños',
    descripcion: '6 unidades con mayonesa de ajo',
    precio: 6000,
    imagen: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=300&fit=crop' // tequeños (mantener, es tequeños)
    },
    {
    nombre: 'Empanadas Colombianas',
    descripcion: 'Empanadas tradicionales rellenas de carne y papa',
    precio: 1800,
    imagen: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=300&fit=crop' // empanadas (mantener, es empanada)
    }
],
platosPrincipales: [
    {
    nombre: 'Bandeja Paisa',
    descripcion: 'Arroz, frijoles, huevo, tajadas de plátano maduro, aguacate, chorizo de cerdo y chicharrón o carne de cerdo (sin carne molida)',
    precio: 18000,
    imagen: '/img/bandejapaisa.png' // bandeja paisa (mejor imagen de bandeja paisa)
    },
    {
    nombre: 'Frijolada',
    descripcion: 'Frijoles con porción de arroz',
    precio: 7800,
    imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' // frijolada
    },
    {
    nombre: 'Arroz con Maduro, Aguacate y Carne',
    descripcion: 'Arroz con maduro, aguacate y porción de carne de cerdo + limonada',
    precio: 10000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // arroz con maduro
    },
    {
    nombre: 'Arroz con Ensalada y Carne',
    descripcion: 'Arroz con ensalada y carne de cerdo + limonada',
    precio: 8500,
    imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' // arroz con ensalada
    },
    {
    nombre: 'Arroz con Huevo Frito y Carne',
    descripcion: 'Arroz con huevo frito y carne de cerdo + limonada',
    precio: 8500,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // arroz con huevo
    },
    {
    nombre: 'Salchipapa Grande',
    descripcion: 'Papas fritas con salchicha, salsas y acompañamientos',
    precio: 8000,
    imagen: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=300&fit=crop' // salchipapa grande
    },
    {
    nombre: 'Salchipapa Mediana',
    descripcion: 'Porción mediana de papas fritas con salchicha',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // salchipapa mediana
    },
    {
    nombre: 'Picada para 2',
    descripcion: 'Variedad de carnes, chicharrón, chorizo y acompañamientos para compartir',
    precio: 16000,
    imagen: '/img/picada.png' // picada para 2
    },
],
desayunos: [
    {
    nombre: 'Calentao Solo',
    descripcion: 'Arroz revuelto con frijoles',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // calentao solo
    },
    {
    nombre: 'Calentao con Arepa',
    descripcion: 'Calentao acompañado de arepa',
    precio: 4000,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // calentao con arepa
    },
    {
    nombre: 'Calentao con Arepa y Carne/Chicharrón',
    descripcion: 'Calentao completo',
    precio: 7000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // calentao con carne
    },
    {
    nombre: 'Calentado con Huevo Revuelto',
    descripcion: 'Arroz revuelto con frijoles, arepa y huevo revuelto',
    precio: 8000,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // calentado con huevo
    },
    {
    nombre: 'Arepa con Huevo Revuelto',
    descripcion: 'Arepa con huevo revuelto',
    precio: 4000,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // arepa con huevo
    },
    {
    nombre: 'Arepa con Quesito',
    descripcion: 'Arepa con quesito',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // arepa con quesito
    },
    {
    nombre: 'Pericos',
    descripcion: 'Huevos revueltos con cebolla y tomate',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // pericos
    },
    {
    nombre: 'Arepa con Jamón y Queso',
    descripcion: 'Arepa con jamón y queso',
    precio: 6500,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // arepa con jamón y queso
    },
    {
    nombre: 'Arepa con Chicharrón o Carne',
    descripcion: 'Arepa con chicharrón o carne',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // arepa con chicharrón
    },
    {
    nombre: 'Arepa con Arroz y Huevo',
    descripcion: 'Arepa con arroz y huevo',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // arepa con arroz y huevo
    },
    {
    nombre: 'Arepa con Pollo o Carne Desmechada',
    descripcion: 'Arepa con pollo o carne desmechada',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1600891963935-c9b6d5aa0a4b?w=400&h=300&fit=crop' // arepa con pollo o carne desmechada
    }
],
bebidas: [
    {
    nombre: 'Licuados/Jugos',
    descripcion: 'De guanábana, maracuyá, tomate de árbol, mango, mora, frutilla, papaya, guayaba, piña, banana, chirimoya',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop' // jugos (mantener, es jugos)
    },
    {
    nombre: 'Exprimido de Naranja',
    descripcion: 'Jugo de naranja natural exprimido',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop' // exprimido de naranja (mantener)
    },
    {
    nombre: 'Limonada dulce',
    descripcion: 'Refrescante limonada dulce',
    precio: 2800,
    imagen: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop' // limonada
    },
    {
    nombre: 'Gaseosa 1.75 |',
    descripcion: 'Gaseosa tamaño grande',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop' // gaseosa 1.75
    },
    {
    nombre: 'Gaseosa de 500ml',
    descripcion: 'Gaseosa tamaño mediano',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop' // gaseosa 500ml
    },
    {
    nombre: 'Gaseosa en lata de 354ml',
    descripcion: 'Gaseosa en lata',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop' // gaseosa lata 354ml
    },
    {
    nombre: 'Gaseosa en lata de 237ml',
    descripcion: 'Gaseosa en lata pequeña',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop' // gaseosa lata 237ml
    },
    {
    nombre: 'Agua Saborizada',
    descripcion: 'Agua con sabor',
    precio: 2200,
    imagen: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop' // agua saborizada
    },
    {
    nombre: 'Agua sin gas o con gas',
    descripcion: 'Agua natural o con gas',
    precio: 1500,
    imagen: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=300&fit=crop' // agua sin gas
    },
    {
    nombre: 'Agua panela',
    descripcion: 'Bebida de caña de azúcar',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // agua panela
    },
    {
    nombre: 'Milo frío',
    descripcion: 'Bebida fría de chocolate en polvo',
    precio: 4000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // milo frío
    },
    {
    nombre: 'Mazamorra',
    descripcion: 'Bebida tradicional de maíz',
    precio: 4000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // mazamorra
    },
    {
    nombre: 'Café Mediano',
    descripcion: 'Café de tamaño mediano',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // café mediano
    },
    {
    nombre: 'Café Chico',
    descripcion: 'Café de tamaño chico',
    precio: 2500,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // café chico
    },
    {
    nombre: 'Taza de chocolate Colombiano',
    descripcion: 'Chocolate caliente tradicional',
    precio: 6000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // chocolate colombiano
    },
    {
    nombre: 'Aguapanela caliente',
    descripcion: 'Bebida caliente de caña de azúcar',
    precio: 3000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // aguapanela caliente
    },
    {
    nombre: 'Milo caliente',
    descripcion: 'Bebida caliente de chocolate en polvo',
    precio: 4000,
    imagen: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=300&fit=crop' // milo caliente
    }
],
cervezas: [
    {
    nombre: 'Brahama',
    descripcion: 'Litro: $6.500 | Lata: $3.500',
    precio: 3500,
    imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' // Brahama (mantener, cerveza)
    },
    {
    nombre: 'Quilmes',
    descripcion: 'Litro: $5.500 | Lata: $3.500',
    precio: 3500,
    imagen: 'https://images.unsplash.com/photo-1600275669436-3b1e4c8c8c8e?w=400&h=300&fit=crop' // Quilmes
    },
    {
    nombre: 'Corona 710ml',
    descripcion: 'Botella de 710ml',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' // Corona
    },
    {
    nombre: 'Stella',
    descripcion: 'Litro: $7.500 | Lata: $4.500',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1600275669436-3b1e4c8c8c8e?w=400&h=300&fit=crop' // Stella
    },
    {
    nombre: 'Palermo',
    descripcion: 'Litro',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' // Palermo
    },
    {
    nombre: 'Heineken',
    descripcion: 'Litro',
    precio: 6500,
    imagen: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop' // Heineken
    }
]
};