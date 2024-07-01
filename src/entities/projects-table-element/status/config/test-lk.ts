import { IUserProfile } from '../model/user-profile.type';

export const TestLkData: IUserProfile = {
  modulesVisibility: {
    stages: false,
    status: false,
    editgates: false,
    timegates: false,
    phases: true,
  },
  ratesUrl: null,
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
      date: '',
      description: 'Test',
      images: [],
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
