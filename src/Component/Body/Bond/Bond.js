import React from 'react'
import Bnd from '../../Image/Bond.png'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import {NavLink} from 'react-router-dom'

const Bond = () => {
    const bondData = [
        {
            name : "BUSD",
            price : "5.6",
            roi : "40.8",
            days : "14",
            img: Bnd, 
            percent : "+20.2"
        }
    ]
  return (
    <div className="bond">
        <div className="balance">
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
            <div className="bond_number_content">
                <p>BOND [1,1]</p>
                <p>2 hrs, 7 mins to next rebase</p>
            </div>
            <div className="bond_box_content">
                <table>
                    <tr>
                        <th style={{textAlign: "center"}}>Bond</th>
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
            <div className="bond_btn">
                <NavLink to="/bond/aprove"><button>PROCEED <AiOutlineRight/></button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Bond