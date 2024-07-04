import { IUserProfile } from '../model/user-profile.type';

export const InitialStatusData: IUserProfile = {
  modulesVisibility: {
    stages: false,
    status: false,
    editgates: false,
    timegates: false,
    phases: true,
  },
  ratesUrl: ['https://i.pinimg.com/236x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg'],
  stages: {
    stages: ['Обсуждение', 'Дизайн', 'Правки'],
    activeStage: 'Обсуждение',
    status: 'pending25',
  },
  status: '',
  editgate: {
    start: '',
    end: '',
  },
  timegatesHours: {
    all: 12,
    remain: 11,
  },
  phases: [
    {
      id: 1,
      name: 'Этап 1',
      date: new Date().toISOString().slice(0, 10),
      description: 'Test',
      urlImages: [
        'https://i.pinimg.com/236x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg',
        'https://i.pinimg.com/236x/24/15/21/24152197af38deb718eb730992d441d0.jpg',
      ],
      fileImages: [],
      links: [
        {
          id: 0,
          url: '',
          name: 'Test link',
        },
      ],
    },
  ],
};
