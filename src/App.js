import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Sections/Home/Home';
import Experience from './components/Sections/Experience/Experience';
import Projects from './components/Sections/Projects/Projects';
import Me from './components/Sections/Me/Me';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  React.useEffect(() => {
    AOS.init({ mirror: true, offset: 172 })
    return () => null
  }, [])
  const SECTIONS_MAP = [<Home />, <Projects />, <Experience />, <Me />]
  const [currentTab, setCurrentTab] = React.useState(0)

  const gotoTab = tab_index => {
    setCurrentTab(tab_index)
  }

  return (
    <div className="App">
      <Navbar currentTab={currentTab} gotoTab={gotoTab} />
      {SECTIONS_MAP[currentTab]}
    </div>
  );
}

export default App;
