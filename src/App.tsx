import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Search from './Components/Search';
import NotFoud from './Components/NotFoud';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="*" element={ <NotFoud /> } />
    </Routes>
  );
}

export default App;
