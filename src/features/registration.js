import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  FIO_Parent: '',
  FIO_Children: '',
  Age: '',
  phoneNumber: '',
  answers: [],
  link: ''
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    FIO_Parent: (state, action) => {
      state.FIO_Parent = action.payload;
      localStorage.setItem('Родитель', JSON.stringify(action.payload));
    },
    FIO_Children: (state, action) => {
      state.FIO_Children = action.payload;
      localStorage.setItem('Ребенок', JSON.stringify(action.payload));
    },
    Age: (state, action) => {
      state.Age = action.payload;
      localStorage.setItem('Возраст / Класс', JSON.stringify(action.payload));
    },
    phoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      localStorage.setItem('Сотовый', JSON.stringify(action.payload));
    },
    getUser: (state) => {
      let FIO_Parent = JSON.parse(localStorage.getItem('Родитель'));
      let FIO_Children = JSON.parse(localStorage.getItem('Ребенок'));
      let Age = JSON.parse(localStorage.getItem('Возраст / Класс'));
      let phoneNumber = JSON.parse(localStorage.getItem('Сотовый'));
      let user = {
        Родитель: FIO_Parent,
        Ребенок: FIO_Children,
        'Возраст / Класс': Age,
        Сотовый: phoneNumber,
      };
    },
    getAnswers: (state, action) => {
      let a = action.payload
      let question = a['Вопрос']
      let answer = a['Ответ']['answerText']
      let isCorrect = a['Ответ']['isCorrect']
      let asnwers = {
        Вопрос: question,
        Ответ: answer + ' / ' + isCorrect
      }
      state.answers.push(asnwers);
    },
    removeAnswers: (state) => {
      state.answers = [];
    },
    getLink: (state, action) => {
      state.link = action.payload;
      localStorage.setItem('Link', JSON.stringify(action.payload));
    },
  },
});

export const {
  FIO_Parent,
  FIO_Children,
  Age,
  phoneNumber,
  getUser,
  getAnswers,
  removeAnswers,
  getLink,
} = registrationSlice.actions;
export default registrationSlice.reducer;
