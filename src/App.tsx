import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import NotFoud from './Components/NotFoud';
import Album from './Components/Album';
import Search from './Components/Search';
import Layout from './Components/Layout';

function App() {
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
      {!isRootPath && <Layout />}
      <Routes>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="*" element={ <NotFoud /> } />
      </Routes>
    </>
  );
}

export default App;
