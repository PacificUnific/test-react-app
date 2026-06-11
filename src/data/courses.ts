export type Course = {
  title: string;
  description: string;
  price: string;
};

export const courses: Course[] = [
  {
    title: 'Барбер с нуля',
    description: 'База профессии, инструменты, формы, сервис и практика на моделях.',
    price: 'от 45 000 ₽',
  },
  {
    title: 'Fade-интенсив',
    description: 'Плотная отработка переходов, теней и чистой машинной техники.',
    price: 'от 18 000 ₽',
  },
  {
    title: 'Борода и бритьё',
    description: 'Форма бороды, горячее полотенце, опасная бритва и уход.',
    price: 'от 22 000 ₽',
  },
];
