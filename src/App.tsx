import React,{useState} from 'react';
import Hello from './components/Hello'

const App = () => {
  const [name] = useState('Peter');
  return (
    <div className="App">
      <Hello message={`I am ${name}!`}/>
    </div>
  );
}

export default App;
