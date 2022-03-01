import React from 'react'
import { FaLungs } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { BiCoinStack } from "react-icons/bi";
import { SiEpicgames } from "react-icons/si";
import {IoIosDocument} from 'react-icons/io'
import { MdOutlineLibraryBooks, MdLiveHelp, MdHail } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = ({sidebar, showSidebar}) => {
  return (
    <>
      <div className={sidebar? "left sidebar-content" : "sidebar-content"}>
        <NavLink onClick={showSidebar}  to="/" activeClassName="active"><span><FaLungs/></span>Overview</NavLink>
        <NavLink onClick={showSidebar}  to="/bond" activeClassName="active"><span><GiBookCover/></span> Bond</NavLink>
        <NavLink onClick={showSidebar}  to="/stake" activeClassName="active"><span><BiCoinStack/></span> Stake</NavLink>
        <NavLink onClick={showSidebar}  to="/bet-slip" activeClassName="active"><span><MdOutlineLibraryBooks/></span> Bet Slip</NavLink>
        <NavLink onClick={showSidebar}  to="/create-event" activeClassName="active"><span><BsPlusCircle/></span> Create Event</NavLink>
        <NavLink onClick={showSidebar}  to="/validate-event" activeClassName="active"><span><IoIosDocument/></span> Validate Events</NavLink>
        <NavLink onClick={showSidebar}  to="/self-help" activeClassName="active"><span><MdLiveHelp/></span> Self Help</NavLink>
        <NavLink onClick={showSidebar}  to="/decent-ralised-betting" activeClassName="active"><span><SiEpicgames/></span> decentralised betting</NavLink>
        <NavLink onClick={showSidebar}  to="/docs" activeClassName="active"><span><IoIosDocument/></span> Docs</NavLink>
      </div>
    </>
  )
}

export default Sidebar