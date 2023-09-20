import { useState } from 'react'
import Banner from './components/Banner';
import Destinations from "./components/Destinations";
import Footer from './components/Footer';
import Trips from './components/Trips';
import Standard from "./components/Standard";
import Articles from "./components/Articles";

function App() {

  return (
    <main className=''>
      <Banner />
      <Destinations />
      <Trips />
      <Standard/>
      <Articles/>
      <Footer />
    </main>
  )
}

export default App
