import React, { useState } from 'react'
import displayIcon from '../../Assests/icons_FEtask/Display.svg'
import downIcon from '../../Assests/icons_FEtask/down.svg'
import "./display.css"
export default function Display(props) {
    const [toggleFilter, settoggleFilter] = useState(false);

    function handleGroup(e) {
        // settoggleFilter(!toggleFilter);
        if (e.target.value) {
            props.handleGroupBy(e.target.value);
        }
    }
    function handleOrder(e) {
        // settoggleFilter(!toggleFilter);
        if (e.target.value) {
            props.handleOrderBy(e.target.value);
        }
    }

    return (
        <section className="nav">
                <div className="display">
                    <div className="display-btn" onClick={() => settoggleFilter(!toggleFilter)}>
                        <div className="display-icon display-filter">
                            <img src={displayIcon} alt="icon" />
                        </div>
                        <div className="display-heading">
                            Display
                        </div>
                        <div className="display-icon display-drop">
                            <img src={downIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleFilter ? "display-dropdown display-dropdown-show" : "display-dropdown"}>
                        <div className="display-filters">
                            <div className="display-dropdown-category">
                                Grouping
                            </div>
                            <div className="display-dropdown-selector">
                                <select value={props.groupBy} onChange={handleGroup} className='display-selector' name="grouping" >
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="display-filters">
                            <div className="display-dropdown-category">
                                Ordering
                            </div>
                            <div className="display-dropdown-selector">
                                <select value={props.orderBy} onChange={handleOrder} className='display-selector' name="ordering" >
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}