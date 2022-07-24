import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const state = useSelector((state) => state.account)

  console.log(state)

  return (
    <div className="App">

    </div>
  );
}

export default App;
