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
