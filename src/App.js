
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Switch} from 'react-router'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/home/Home';
import Contact from './components/sections/contacts/Contact';
import Company from './components/sections/company/Company';
import OurServices from './components/sections/our services/OurServices';
import Quote from './components/sections/request quote/Quote';
import OurTeam from './components/sections/company/OurTeam';
import Trent from './components/sections/company/team/Trent';
import Natalia from './components/sections/company/team/Natalia';
import Rebecca from './components/sections/company/team/Rebecca';
import Courtney from './components/sections/company/team/Courtney';
import Robbie from './components/sections/company/team/Robbie';
import TopBarProgress from "react-topbar-progress-indicator";

function App() {
  TopBarProgress.config({
    barColors: {
      "0": "#fff",
      "1": "#fff"

    },
    shadowBlur: 5
  });
  return (
    <Router>
      <TopBarProgress />
      <div className="boxed">
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/company/" element={<Company />} />
            <Route exact path="/company/ourteam/" element={<OurTeam />} />
            <Route exact path="/company/aboutus/" element={<Company />} />
            <Route exact path="/company/ourteam/trentfugate/" element={<Trent />} />
            <Route exact path="/company/ourteam/nataliafugate/" element={<Natalia />} />
            <Route exact path="/company/ourteam/rebeccaWatson/" element={<Rebecca />} />
            <Route exact path="/company/ourteam/courtneyfuller/" element={<Courtney />} />
            <Route exact path="/company/ourteam/robbiefletcher/" element={<Robbie />} />
            <Route exact path="/company/ourteam/number5/" element={<Trent />} />
            <Route path="/our-services/" element={<OurServices />} />
            <Route path="/quote/" element={<Quote />} />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
