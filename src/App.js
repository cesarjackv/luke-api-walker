//import logo from './logo.svg';
import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import Form from './components/Form';
import SearchInfo from './components/SearchInfo';

function App() {
  return (
    <div className="App">
      <h1>Luke Api Walker</h1>
      <Form/>
      <Routes>
        <Route exact path="/:search/:id" element={<SearchInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
