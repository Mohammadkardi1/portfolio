import './App.css';
import Layout from './Components/Layout/Layout';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init()
  }, [])


  return <Layout/>
}

export default App;
