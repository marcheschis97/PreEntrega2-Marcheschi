const productos = [
  {
    id: "wrt154",
    nombre: "Vestido University Club",
    descripcion: "Composicion: 100% Viscosa - Estilo vestuario: Casual - Temporada: Primavera-Verano",
    stock: 10,
    precio: 13000,
    imagen: "/img/vestido-mujer-1.jpeg",
    categoria: "Mujeres"
  },
  {
    id: "ssm682",
    nombre: "Blusa Sybilla",
    descripcion: "Composicion: 100% Algodón - Estilo vestuario: Casual - Temporada: Primavera-Verano",
    stock: 10,
    precio: 12000,
    imagen: "/img/blusa-mujer-2.jpeg",
    categoria: "Mujeres"
  },
  {
    id: "jyt741",
    nombre: "Blazer Mossimo",
    descripcion: "Composicion: 100% Viscosa - Estilo vestuario: Casual - Temporada: Primavera-Verano",
    stock: 10,
    precio: 15000,
    imagen: "/img/blazer-mujer-3.jpeg",
    categoria: "Mujeres"
  },
  {
    id: "kfr188",
    nombre: "Camisa Mossimo",
    descripcion: "Composicion: Viscosa - Estilo vestuario: Casual - Temporada: Primavera-Verano",
    stock: 5,
    precio: 20000,
    imagen: "/img/camisa-hombre-1.jpeg",
    categoria: "Hombres"
  },
  {
    id: "lwe874",
    nombre: "Jeans Super Skinny Americanino",
    descripcion: "Composicion: 50% Algodón, 24% Poliéster, 2% Spandex - Estilo vestuario: Casual - Temporada: Toda temporada",
    stock: 8,
    precio: 24000,
    imagen: "/img/jeans-hombre-2.jpeg",
    categoria: "Hombres"
  },
  {
    id: "lst925",
    nombre: "Musculosa Doo Australia",
    descripcion: "Composicion: 100% Cotton - Estilo vestuario: Casual - Temporada: Primavera-Verano",
    stock: 10,
    precio: 8990,
    imagen: "/img/musculosa-hombre-3.jpeg",
    categoria: "Hombres"
  },
  {
    id: "loi558",
    nombre: "Jeans Jeggins Eleven",
    descripcion: "Composicion vestuario: 75% Algodón 23% Poliester 2% Elastano - Temporada: Toda temporada",
    stock: 10,
    precio: 6700,
    imagen: "/img/jeans-ninos-1.jpeg",
    categoria: "Niños"
  },
  {
    id: "kfj587",
    nombre: "Vestido Eleven",
    descripcion: "Composicion: 100% algodón - Temporada: Primavera-Verano",
    stock: 10,
    precio: 19000,
    imagen: "/img/vestido-ninos-2.jpeg",
    categoria: "Niños"
  },
  {
    id: "lkf214",
    nombre: "Bermuda Federation",
    descripcion: "Composicion: 98% Algodon 2% Elastano - Temporada: Primavera-Verano",
    stock: 10,
    precio: 15000,
    imagen: "/img/bermuda-ninos-3.jpeg",
    categoria: "Niños"
  },
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos