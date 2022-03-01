import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar"
import Sidebar from './Component/Sidebar/Sidebar'
import Overview from './Component/Body/Overview/Overview'
import Bond from "./Component/Body/Bond/Bond";
import BondAprove from "./Component/Body/Bond/BondAprove";
import Stake from "./Component/Body/Stake/Stake";
import BetSlip from "./Component/Body/BetSlip/BetSlip";
import { useState } from "react";
import CreateEvent from "./Component/Body/CreateEvent/CreateEvent";
import Page2 from "./Component/Body/CreateEvent/Page2";
import Page3 from "./Component/Body/CreateEvent/Page3";
import Page4 from "./Component/Body/CreateEvent/Page4";
import History from "./Component/Body/CreateEvent/History";
import ValidateEvents from "./Component/Body/ValidateEvents/ValidateEvents";
import ValidatePage2 from "./Component/Body/ValidateEvents/Page2";
import SelfHelp from "./Component/Body/SelfHelp/SelfHelp";






function App() {
  // Sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar=()=>{
    setSidebar(!sidebar)
  }
 
  return (
    <Router>
      <Navbar showSidebar={showSidebar} />
      <div className="body">
        <div className="sidebar">
          <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        </div>
        <div className="content">
          <Routes>
              <Route  exact={true} path="/"  element={<Overview/>} />
              <Route  exact={true} path="/bond"  element={<Bond/>} />
              <Route  exact={true} path="/bond/aprove"  element={<BondAprove/>} />
              <Route exact={true}  path="/stake" element={<Stake/>}/>
              <Route exact={true} path="/bet-slip" element={<BetSlip/>}/>
              <Route exact={true} path="/create-event" element={<CreateEvent/>}/>
              <Route exact={true} path="/create-event/page2" element={<Page2/>}/>
              <Route exact={true} path="/create-event/page3" element={<Page3/>}/>
              <Route exact={true} path="/create-event/page4" element={<Page4/>}/>
              <Route exact={true} path="/create-event/history" element={<History/>}/>
              <Route exact={true} path="/validate-event"  element={<ValidateEvents/>}/>
              <Route exact={true} path="/validate-event/page2"  element={<ValidatePage2/>}/>
              <Route exact={true} path="/self-help"  element={<SelfHelp/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
