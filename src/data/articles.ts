export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 'una-iglesia-que-crece',
    title: 'Una Iglesia que crece',
    excerpt: 'Una iglesia que crece, tiene que aprender a escuchar a Dios y creerle. Creerle a Dios implica aceptar Su palabra y entregarse para hacer su voluntad.',
    content: [
      'Una iglesia que crece, tiene que aprender a escuchar a Dios y creerle. Creerle a Dios implica aceptar Su palabra y entregarse para hacer su voluntad. Esto trae consigo una crisis, o sea, un conflicto de voluntades.',
      'Por un lado, sé que la voluntad de Dios es la mejor, es buena y no se puede cambiar. Por otro, está la mía que es débil, egoísta y se opone a la de Dios. Cuando oramos, confrontamos nuestro ser, con el de Dios, tres veces Santo, perfecto, puro.',
      'Cuando oramos, no podemos salir de su Presencia igual que como entramos. Hay un cambio que debemos de efectuar; ajustar a su voluntad y propósito. Para la iglesia de Jerusalén, en Antioquía, esto es normal. Ellos dieron sus vidas por su Señor y Salvador Jesucristo.',
      'Cuando aprendamos esto de aquellos nuestros hermanos que oyendo la voz del Señor, no fueron rebeldes, sino que a su obediencia, resultó en un crecimiento maravilloso del Reino de Dios en todo el mundo conocido entonces, seremos como ellos una iglesia ferviente en espíritu, pujante, llenos de fe en nuestro Señor.',
      'Él fue generoso en su ofrenda; su propia vida en una horrible cruz para salvarnos de toda condenación. Hermanos, queremos crecer en todo, y esto le agrada al Señor. Entonces decídete a entrar a la vida de oración para entrenar tu oído espiritual para oír la voz de tu Señor y obedecerle.',
    ],
    author: 'Pr. Alfredo Figari',
    date: '2023-03-05',
    image: '/images/slideshow/crecimiento.jpeg',
    tags: ['Iglesia', 'Fe', 'Oración', 'Crecimiento Espiritual'],
  },
  {
    id: 'la-verdadera-grandeza',
    title: 'La verdadera grandeza',
    excerpt: 'La grandeza no se mide por logros terrenales, sino por la humildad y el servicio a los demás siguiendo el ejemplo de Cristo.',
    content: [
      'En un mundo que constantemente nos empuja a buscar reconocimiento y éxito, la verdadera grandeza cristiana se encuentra en el servicio humilde a los demás.',
      'Jesús nos enseñó que el mayor entre nosotros debe ser el servidor de todos. Esta es una verdad revolucionaria que va en contra de todo lo que el mundo nos dice.',
      'La verdadera grandeza no busca los primeros lugares, no busca ser vista ni aplaudida. Busca servir en silencio, amar sin esperar nada a cambio, y glorificar a Dios en todo.',
    ],
    author: 'Pr. Alfredo Figari',
    date: '2023-06-22',
    image: '/images/slideshow/grandeza.jpg',
    tags: ['Humildad', 'Servicio', 'Jesús', 'Vida Cristiana'],
  },
  {
    id: 'porque-usted-lo-vale',
    title: '¿Por qué usted lo vale?',
    excerpt: 'El valor de cada persona no está en sus logros, sino en que fuimos creados a imagen de Dios y redimidos por Cristo.',
    content: [
      'Muchas veces nos preguntamos cuál es nuestro valor. El mundo nos dice que valemos por lo que hacemos, por lo que tenemos, o por lo que otros piensan de nosotros.',
      'Pero la Biblia nos enseña una verdad diferente: valemos porque Dios nos creó a Su imagen y semejanza. Valemos tanto que Dios envió a Su Hijo a morir por nosotros.',
      'No necesitamos probar nuestro valor a nadie. Ya está establecido por el precio que Cristo pagó en la cruz. Ese es el verdadero valor de cada alma.',
    ],
    author: 'Pr. Alfredo Figari',
    date: '2023-06-08',
    image: '/images/slideshow/alma.jpg',
    tags: ['Identidad', 'Salvación', 'Valor', 'Cruz'],
  },
];

export const articleComments: Record<string, Comment[]> = {
  'una-iglesia-que-crece': [
    {
      id: '1',
      author: 'María González',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      content: 'Me encanta este mensaje sobre el crecimiento espiritual. Realmente necesitamos aprender a escuchar la voz de Dios y ser obedientes a Su voluntad.',
      date: '2023-03-09',
    },
    {
      id: '2',
      author: 'Carlos Méndez',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      content: 'Excelente reflexión pastor. La oración es fundamental para ajustarnos a la voluntad de Dios. Bendiciones!',
      date: '2023-03-12',
    },
    {
      id: '3',
      author: 'Ana Rivera',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      content: 'Hermoso artículo que nos recuerda la importancia de crecer en fe y oración. Dios nos ayude a ser fieles.',
      date: '2023-03-20',
    },
  ],
  'la-verdadera-grandeza': [],
  'porque-usted-lo-vale': [],
};
