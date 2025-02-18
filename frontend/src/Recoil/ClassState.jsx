import { atom } from 'recoil';

export const classListState = atom({
  key: 'classList',
  default: [],
});

export const studentListState = atom({
  key: 'studentList',
  default: [],
});

export const isAddModalOpenState = atom({
  key: 'isAddModalOpen',
  default: false,
});

export const isRefactorModalOpenState = atom({
  key: 'isRefactorModalOpen',
  default: false,
});
