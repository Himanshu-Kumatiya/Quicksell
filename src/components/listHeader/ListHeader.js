import React from 'react'
import todo from '../../Assests/icons_FEtask/To-do.svg'
import progress from '../../Assests/icons_FEtask/in-progress.svg'
import backlog from '../../Assests/icons_FEtask/Backlog.svg'
import done from '../../Assests/icons_FEtask/Done.svg'
import cancel from '../../Assests/icons_FEtask/Cancelled.svg'
import low from "../../Assests/icons_FEtask/Img - Low Priority.svg";
import high from "../../Assests/icons_FEtask/Img - High Priority.svg";
import No from "../../Assests/icons_FEtask/No-priority.svg";
import medium from "../../Assests/icons_FEtask/Img - Medium Priority.svg";
import Urgent from "../../Assests/icons_FEtask/SVG - Urgent Priority colour.svg";
import add from "../../Assests/icons_FEtask/add.svg";
import dot from "../../Assests/icons_FEtask/3 dot menu.svg";

import './listHeader.css';
export const ListHeader = (props) => {
    return (
        <div className="list-header">
            <div className="list-header-left">
                {
                    {
                        'status': <>{
                            {
                                'Backlog': <div className="list-icon">
                                    <img src={backlog} alt='icon'/>
                                </div>,
                                'Todo': <div className="list-icon">
                                    <img src={todo} alt='icon'/>
                                </div>,
                                'In progress': <div className="list-icon">
                                    <img src={progress} alt='icon'/>
                                </div>,
                                'Done': <div className="list-icon">
                                    <img src={done} alt='icon'/>
                                </div>,
                                'Cancelled': <div className="list-icon">
                                    <img src={cancel} alt='icon'/>
                                </div>
                            }[props.title]
                        } </>,
                        'user':
                             <div className="card-profile">
                                <div className="card-profile-img">{props.title[0]}{props.title[1]}</div>
                                 <div className="user-available"></div>
                             </div>,
                        'priority': <>{
                            {
                                'No priority': <div className="list-icon"><img src={No} alt="icon" /></div>,
                                'Low': <div className="list-icon"><img src={low} alt="icon"/></div>,
                                "Medium": <div className="list-icon"><img src={medium} alt="icon"/></div>,
                                "High": <div className="list-icon"><img src={high} alt="icon"/></div>,
                                'Urgent': <div className="list-icon"><img src={Urgent} alt="icon"/></div>
                            }[props.title]
                        } </>
                    }[props.groupBy]
                }
                <div className="list-title">
                    {props.title}
                </div>
                <div className="list-sum">{props.cardCount}</div>
            </div>
            <div className="list-header-right">
                <div className="list-add-item">
                    <img src={add} alt="icon"/>
                </div>
                <div className="list-option-item">
                    <img src={dot} alt="icon"/>
                </div>
            </div>
        </div>
    )
}
