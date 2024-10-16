import React from 'react'
import low from "../../Assests/icons_FEtask/Img - Low Priority.svg";
import './card.css'
import high from "../../Assests/icons_FEtask/Img - High Priority.svg";
import No from "../../Assests/icons_FEtask/No-priority.svg";
import medium from "../../Assests/icons_FEtask/Img - Medium Priority.svg";
import Urgent from "../../Assests/icons_FEtask/SVG - Urgent Priority grey.svg";
export default function Card(props) {
    return (
        <div className="card-container">
            <div className="userId-container">
                <div className="userId">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-img">{props.cardDetails.userDetail.name[0]}{props.cardDetails.userDetail.name[1]}</div>
                    <div className={props.cardDetails.userDetail.available ? "user-available user-available-true" : "user-available"}></div>
                </div>
            </div>
            <div className="card-heading">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src={No} alt="icon" /></div>,
                        1: <div className="card-tag-icon"><img src={low} alt="icon" /></div>,
                        2: <div className="card-tag-icon"><img src={medium} alt="icon" /></div>,
                        3: <div className="card-tag-icon"><img src={high} alt="icon" /></div>,
                        4: <div className="card-tag-icon"><img src={Urgent} alt="icon" /></div>
                    }[props.cardDetails.priority]
                }
                {
                    props.cardDetails.tag.map((tag,id) => {
                        return (
                            <div key={id} className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}