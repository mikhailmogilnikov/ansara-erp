import { IUserProfile, TProjectPhase } from '../model/user-profile.type';

export const InitialPhaseData: TProjectPhase = {
  id: 2,
  name: 'Этап 2',
  date: new Date().toISOString().slice(0, 10),
  description: 'Test',
  urlImages: [],
  fileImages: [],
  links: [
    {
      id: 0,
      url: '',
      name: 'Test link',
    },
  ],
};

export const InitialStatusData: IUserProfile = {
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
      date: new Date().toISOString().slice(0, 10),
      description: 'Test',
      urlImages: [],
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
