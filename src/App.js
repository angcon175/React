import './App.css';
import Student from './Components/Student';

function App() {

  return (
    <div className="App">
        <Student name='Angcon' />
        <Student age={30} />
    </div>
  );
}

export default App;
