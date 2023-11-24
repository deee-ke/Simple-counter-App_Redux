import './App.css';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App align-items-center" >
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
          <Counter/>
        </div>
    </div>
  );
}

export default App;
