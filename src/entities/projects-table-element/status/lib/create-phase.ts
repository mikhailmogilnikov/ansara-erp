import { TLink } from '@/src/shared/model/index.type';

export const createPhase = (prevId: number) => {
  const newId = prevId + 1;

  return {
    id: newId,
    name: `Этап ${newId}`,
    date: new Date().toISOString().slice(0, 10),
    description: '',
    urlImages: [],
    fileImages: [],
    links: [
      {
        id: 0,
        url: '',
        name: '',
      },
    ],
  };
};

export const createLink = (prevId: number): TLink => {
  const newId = prevId + 1;

  return {
    id: newId,
    url: '',
    name: '',
  };
};
