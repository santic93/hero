import { heroes } from '../../../public/heroes';

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
