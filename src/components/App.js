import '../styles/App.css';
import {Display , Controller } from './index'
import { useDisplay } from '../Provider';
function App() {
  
  
  const globalstate=useDisplay();
  
  return (
    <div className="App">
      <Display  />
      <Controller />
      
    </div>
  );
}

export default App;
