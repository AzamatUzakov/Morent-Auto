import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './layouts/Layout';

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element />
        </Route>
      </Routes>
    </>
  );
}

export default App;
