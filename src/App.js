import { useEffect } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import products from './assests/data/Products';

function App() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[products])
  return (
    <div className="App">
        <Layout/>
    </div>
  );
}

export default App;
