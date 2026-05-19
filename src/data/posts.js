// Posts del blog — por ahora estáticos.
// Cuando exista un CMS real (Notion API, Sanity, Contentful), reemplazar con fetch.
export const posts = [
  {
    slug: 'ansiedad-o-estres',
    category: 'Ansiedad',
    readingTime: '6 min',
    title: '¿Es ansiedad o solo estoy estresado? Cómo distinguirlas.',
    excerpt: 'La línea entre estrés circunstancial y ansiedad clínica no siempre es clara. Algunas pistas para reconocer cuándo pedir ayuda.',
    image: '/images/post-1.jpg',
    gradient: 'linear-gradient(135deg, #C4A582 0%, #8E6A48 100%)',
  },
  {
    slug: 'duelo-no-lineal',
    category: 'Duelo',
    readingTime: '9 min',
    title: 'El duelo no es lineal: las fases que nadie te explicó.',
    excerpt: 'El modelo clásico de Kübler-Ross es solo el principio. Hoy entendemos el duelo como un proceso oscilante y profundamente personal.',
    image: '/images/post-2.jpg',
    gradient: 'linear-gradient(135deg, #B5BCA0 0%, #6A7A5C 100%)',
  },
  {
    slug: 'terapia-y-pareja',
    category: 'Vínculos',
    readingTime: '7 min',
    title: 'Cuando la terapia individual cambia la dinámica de pareja.',
    excerpt: 'Comenzar a sanar por separado puede transformar la relación de formas inesperadas. Lo que muchas veces ocurre, y por qué.',
    image: '/images/post-3.jpg',
    gradient: 'linear-gradient(135deg, #D4A78B 0%, #A4684A 100%)',
  },
]
