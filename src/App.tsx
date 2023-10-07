import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import NotFoud from './Components/NotFoud';
import Album from './Components/Album';
import Search from './Components/Search';
import Layout from './Components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />

      <Route element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="*" element={ <NotFoud /> } />
      </Route>
    </Routes>
  );
}

export default App;
