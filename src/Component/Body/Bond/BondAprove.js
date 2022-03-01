import React, {useState} from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Bnd from '../../Image/Bond.png'
import { AiOutlineCloseCircle } from "react-icons/ai";

const BondAprove = () => {
    const bondData = [
        {
            name : "BUSD",
            price : "5.6",
            roi : "40.8",
            days : "14",
            img: Bnd, 
            percent : "+20.2"
        }
    ];
    const [setting, setSetting] = useState(false);
    const [aprove, setAprove] = useState(true)
  return (
  <div className="settings_div">
    <div className="bond aprove">
        
        <div className="bond_box_content bond_aprove_border">
            <table>
                    <tr>
                        <th style={{textAlign: "left"}}>Bond</th>
                        <th>Price</th>
                        <th>ROI</th>
                        <th>DURATION</th>
                    </tr>
                    {bondData.map((val, ind)=>{
                        return(
                            <tr key={ind}>
                                <td>
                                    <div className="bond_name">
                                        <img className="bond_name_img" src={val.img} alt="" />
                                        <div className="bond_name_content">
                                            <p className="bond_name_content_p">{val.name}</p>
                                            <p className="bond_name_percent">{val.percent}%</p>
                                        </div>
                                    </div>
                                </td>
                                <td>${val.price}</td>
                                <td>{val.roi}%</td>
                                <td>{val.days}DAYS</td>
                            </tr>
                        )
                    })}
            </table>
        </div>
        <div className="bond_number">
            <div className="bond_number_balance">
                <div className="bond_number_balance_title">
                    <li>Balance </li>
                    <p>0.001  BUSD</p>
                </div>
                <div className="bond_number_balance_title">
                    <li>EXPECTED RETURNS </li>
                    <p>0.00001 sBETS</p>
                </div>
                <div className="bond_number_balance_title">
                    <li>MAX AMOUNT TO BUY </li>
                    <p>3000 sBETS</p>
                </div>
                <div className="bond_number_balance_title">
                    <li>ROI </li>
                    <p>3.14%</p>
                </div>
                <div className="bond_number_balance_title">
                    <li>DURATION </li>
                    <p>14 DAYS</p>
                </div>
            </div>
            <div className={aprove ? "bond_btn" : "bond_btn aprove_bond"}>
                {aprove ? <button onClick={()=>setAprove(false)}>{aprove ? "APROVE" : "BOND"} <AiOutlineRight/></button>
                :
                <>
                    <input type="text" placeholder='MAX'/>
                    <button>{aprove? "APROVE" : "BOND"} <AiOutlineRight/></button>
                </>
                }   
            </div>
            <div className="bond_settings_btn">
                 <span onClick={()=>setSetting(!setting)}><FiSettings/></span>
            </div>
        </div>
    </div>
   {setting ?
     <div className="bond_settings">
        <div className="bond_settings_icon">
            Close <span onClick={()=>setSetting(false)}><AiOutlineCloseCircle/></span>
        </div>
        <div className="bond_settings_number">
            <div className="suppage bond_settings_box">
                <h4>SUPPAGE</h4>
                <input type="text" placeholder="0.5%"/>
                <p>Transaction may revert if price changes by more than slippage %</p>
            </div>
            <div className="recipient bond_settings_box">
                <h4>RECIPIENT ADDRESS</h4>
                <input type="text" placeholder="0.5%"/>
                <p>Choose recipient address. By default, this is your currently connected address</p>
            </div>
        </div>
    </div>
    : ""
    }
  </div>
  )
}

export default BondAprove