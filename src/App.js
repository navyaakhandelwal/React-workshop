import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Keyboard from './component/keyboard/Keyboard';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Keyboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;





