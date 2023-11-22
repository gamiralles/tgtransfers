const post = [
  {
    id: "2",
    category: "moreno",
    img: "/GPMoreno.jpeg",
    titulo: "moreno.titulo",
    info: "moreno.info",
    titulo2: "moreno.titulo2",
    info2a: "moreno.info2a",
    info2b: "moreno.info2b",
    info2c: "moreno.info2c",
    titulo3: "moreno.titulo3",
    info3a: "moreno.info3a",
    info3b: "moreno.info3b",
    info3c: "moreno.info3c",
    info3d: "moreno.info3d",
    info3e: "moreno.info3e",
    titulo4: "moreno.titulo4",
    info4a: "moreno.info4a",
    info4b: "moreno.info4b",
    info4c: "moreno.info4c",
  },
  {
    id: "3",
    category: "chalten",
    img: "/Chalten.jpeg",
    titulo:"chalten.titulo",
    info:"chalten.info",
    titulo2:"chalten.titulo2",
    info2a:"chalten.info2a",
    info2b:"chalten.info2b",
    info2c:"chalten.info2c",
    titulo3:"chalten.titulo3",
    info3a:"chalten.info3a",
    info3b:"chalten.info3b",
    info3c:"chalten.info3c",
    info3d:"chalten.info3d",
    info3e:"chalten.info3e",
    titulo4:"chalten.titulo4",
    info4a:"chalten.info4a",
    info4b:"chalten.info4b",
    info4c:"chalten.info4c",  
  },
  {
    id: "4",
    category: "austral",
    img: "/cCastillo.jpeg",
    titulo: "austral.titulo",
    info: "austral.info",
    titulo2: "austral.titulo2",
    info2a: "austral.info2a",
    info2b: "austral.info2b",
    info2c: "austral.info2c",
    titulo3: "austral.titulo3",
    info3a: "austral.info3a",
    info3b: "austral.info3b",
    info3c: "austral.info3c",
    info3d: "austral.info3d",
    info3e: "austral.info3e",
    titulo4: "austral.titulo4",
    info4a: "austral.info4a",
    info4b: "austral.info4b",
    info4c: "austral.info4c",
  },
];

const inicio = [
  {
    id: "1",
    category: "inicio",
    img: "/InCastillo.jpeg",
  },
];

export const getInicio = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inicio);
    }, 1000);
  });
};

export const getPostByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post.filter((pst) => pst.category === categoryId));
    }, 1000);
  });
};
