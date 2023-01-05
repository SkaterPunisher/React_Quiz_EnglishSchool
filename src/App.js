import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Pages from './components/Pages/Pages';
import Quiz from './components/Quiz/Quiz';
import Introduction from './components/Introduction/Introduction';

function App() {
  return (
    <>
      {' '}
      <div className='triangle_rose' ></div>
      <div className='triangle_vert'></div>
      <Routes>
        {/* <Route path='/quiz/index.html' element={<Pages />} /> */}
        <Route path='/' element={<Pages />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
