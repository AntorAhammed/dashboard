import React, {useState} from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import {NavLink} from 'react-router-dom'

const Stake = () => {
    const [stake, setStake] = useState(true)
  return (
    <div className="bond stake">
        <div className="balance stake_balance">
            <div className="total_tesary_ballance">
                <p className="total_tesary_ballance_p">TOTAL  TREASURY BALANCE <AiOutlineInfoCircle/></p>
                <p>$600,000,000</p>
            </div>
            <div>
                <p >sBets</p>
                <p>$6.34</p>
            </div>
        </div>
        <div className="bond_number">
            <div className="bond_number_content stake_number_content">
                <p>BOND [1,1]</p>
                <p>2 hrs, 7 mins to next rebase</p>
                <div className="stake_btn">
                    <button style={{borderBottom : `${stake ? "1px solid red" : ""}`}} onClick={()=>setStake(true)}>Stacked</button><button style={{borderBottom : `${stake ? "" : "1px solid red"}`}} onClick={()=>setStake(false)}>UNStaked</button>
                </div>
            </div>
            <div className="bond_box_content">
            {stake ?
            <div className="bond_number_balance">
            <div className="bond_number_balance_title stake_number_balance_title">
                <li>Staked Balance </li>
                <p>0.001  BUSD</p>
            </div>
            <div className="bond_number_balance_title stake_number_balance_title">
                <li>UNStaked Balance  </li>
                <p>0.00001 sBETS</p>
            </div>
            <div className="bond_number_balance_title stake_number_balance_title">
                <li>EXPECTED REWARD </li>
                <p>3000 sBETS</p>
            </div>
            <div className="bond_number_balance_title stake_number_balance_title">
                <li>ROI </li>
                <p>3.14%</p>
            </div>
            <div className="bond_number_balance_title">
                <li>DURATION </li>
                <p>14 DAYS</p>
            </div>
        </div>
        : 
        <div className="bond_number_balance">
        <div className="bond_number_balance_title">
            <li>Staked Balance </li>
            <p>0.0001  BUSD</p>
        </div>
        <div className="bond_number_balance_title">
            <li>UNStaked Balance  </li>
            <p>0.0001 sBETS</p>
        </div>
        <div className="bond_number_balance_title">
            <li>EXPECTED REWARD </li>
            <p>300 sBETS</p>
        </div>
        <div className="bond_number_balance_title">
            <li>ROI </li>
            <p>3.1%</p>
        </div>
        <div className="bond_number_balance_title">
            <li>DURATION </li>
            <p>14 DAYS</p>
        </div>
    </div>}
            </div>
            <div className="bond_btn">
                <NavLink to=""><button>APPROVED <AiOutlineRight/></button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Stake