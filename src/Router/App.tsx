import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Result from '../Pages/Result';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result/:key" element={<Result />} />
    </Routes>
  );
};

export default App;
