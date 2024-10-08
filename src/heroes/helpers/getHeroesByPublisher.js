import { heroes } from '../../../public/heroes';

export const getHeroesByPublisher = (publisher) => {

  const validPublisher = ['DC Comics', 'Marvel Comics'];
  if (!validPublisher?.includes(publisher)) {
    throw new Error(`${publisher} no es una publicacion valida`);
  }
  return heroes?.filter((heroe) => heroe.publisher === publisher);
};
