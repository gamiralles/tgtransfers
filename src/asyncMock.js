const post = [
    {
        id:'2',
        category:'moreno',
        img:'https://images.pexels.com/photos/11278486/pexels-photo-11278486.jpeg?auto=compress&cs=tinysrgb&w=400',
        titulo:'Glaciar Perito Moreno',
        info:'El Glaciar Perito Moreno es uno de los principales atractivos turísticos de la Patagonia argentina. Se encuentra en el Parque Nacional Los Glaciares, en la provincia de Santa Cruz. Es uno de los glaciares más grandes del mundo, con una superficie de 250 kilómetros cuadrados.',
        titulo2:'Puntos Importantes:',
        info2a:'El glaciar se encuentra en constante movimiento, lo que lo hace un espectáculo natural único.',
        info2b:'Se pueden realizar diferentes excursiones para apreciar el glaciar, como caminatas, navegaciones y minitrekking.',
        info2c:'El mejor momento para visitar el glaciar es durante los meses de verano, cuando las temperaturas son más altas y el clima es más estable.',
        titulo3:'Lugares a tener en cuenta:',
        info3a:'Mirador del Glaciar Perito Moreno: este mirador ofrece una vista panorámica del glaciar.',
        info3b:'Sendero de los Nogales: este sendero de 2 kilómetros lleva a los visitantes al frente del glaciar.',
        info3c:'Glaciares Gourmet Boat Trip: esta excursión en barco permite a los visitantes acercarse al glaciar y observarlo desde diferentes ángulos.',
        titulo4:'Excursiones para hacer:',
        info4a:'Minitrekking: esta excursión permite a los visitantes caminar sobre el glaciar',
        info4b:'Navegation: esta excursión en barco permite a los visitantes ver el glaciar desde el agua.',
        info4c:'',
    },
    {
        id:'3',
        category:'chalten',
        img:'https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=400',
        titulo:'El Chalten',
        info:'El Chalten es un pueblo ubicado en el Parque Nacional Los Glaciares, en la provincia de Santa Cruz. Es un destino popular para los amantes del trekking, el montañismo y la naturaleza.',
        titulo2:'Puntos Importantes:',
        info2a:'El Chalten es la base para explorar el Cerro Fitz Roy, una de las montañas más emblemáticas de la Patagonia.',
        info2b:'El pueblo también ofrece una variedad de otras actividades, como caminatas, pesca, kayak y rafting.',
        info2c:'El mejor momento para visitar El Chalten es durante los meses de verano, cuando las temperaturas son más altas y el clima es más estable.',
        titulo3:'Lugares a tener en cuenta:',
        info3a:'Cerro Fitz Roy: esta montaña de 3.405 metros de altura es una de las más desafiantes y gratificantes de escalar en la Patagonia.',
        info3b:'Laguna de Los Tres: esta laguna de aguas turquesas se encuentra al pie del Cerro Fitz Roy.',
        info3c:'Glaciar Torre: este glaciar de color azul intenso es otro de los atractivos de El Chalten.',
        titulo4:'Excursiones para hacer:',
        info4a:'Hiking Laguna de Los Tres: esta caminata de 7 kilómetros lleva a los visitantes a la laguna de Los Tres.',
        info4b:'Hiking Laguna Torre: esta caminata de 12 kilómetros lleva a los visitantes al glaciar Torre.',
        info4c:'',
    },
    {
      id:'4',
      category:'austral',
      img:'https://images.pexels.com/photos/14437116/pexels-photo-14437116.jpeg?auto=compress&cs=tinysrgb&w=400',
      titulo:'Carretera Austral',
      info:'La Carretera Austral es una ruta de 1.240 kilómetros que recorre la Patagonia chilena. Es una de las rutas más pintorescas del mundo, ya que atraviesa bosques, montañas, glaciares y lagos.',
      titulo2:'Puntos Importantes:',
      info2a:'La Carretera Austral comienza en Puerto Montt y termina en Villa O`Higgins.',
      info2b:'La ruta es accesible en automóvil, pero también se puede recorrer en bicicleta, autobús o incluso a pie',
      info2c:'El mejor momento para viajar por la Carretera Austral es durante los meses de verano, cuando las temperaturas son más altas y el clima es más estable.',
      titulo3:'Lugares a tener en cuenta:',
      info3a:'Parque Nacional Torres del Paine: este parque nacional alberga algunas de las montañas más emblemáticas de la Patagonia, como las Torres del Paine.',
      info3b:'Parque Nacional Vicente Pérez Rosales: este parque nacional cuenta con una gran variedad de paisajes, como bosques, montañas, lagos y glaciares.',
      info3c:'Parque Nacional Los Glaciares: este parque nacional alberga el glaciar Perito Moreno, uno de los más grandes del mundo.',
      titulo4:'Excursiones para hacer:',
      info4a:'Hiking Torres del Paine: esta caminata de 5 días lleva a los visitantes a las Torres del Paine.',
      info4b:'Crucero por el Lago Argentino: esta excursión permite a los visitantes ver el glaciar Perito Moreno desde el agua.',
      info4c:'Pesca en el río Futaleufú: este río es conocido por su pesca de trucha.',
    }
]

const inicio = [
    {
        img:'https://images.pexels.com/photos/17897657/pexels-photo-17897657/free-photo-of-resfriado-glaciar-iceberg-paisaje.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
]

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