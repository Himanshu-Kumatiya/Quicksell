import React from 'react';
import { ListHeader } from '../listHeader/ListHeader'
import Card from '../card/Card'
import './groupPriority.css'
let cardCount = 0;
export const GroupPriority = ({ users, groupBy, orderBy, tickets }) => {
    const priority = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return (
        <div className="board-details-list">
            {
                priority.map((value, i) => {
                    return (<div key={i} className="list-container">
                        <ListHeader
                            
                            groupBy={groupBy}
                            cardCount={tickets.filter(ticket => ticket.priority === i).length}
                            title={value} />
                        <div className="list-card-items">
                            {
                                tickets.map((ticket, id) => {
                                    if (ticket.priority === i) {
                                        return (<Card key={id} cardDetails={ticket} />)
                                    }
                                })
                            }
                        </div>
                    </div>)
                })
            }
        </div>
    )
}
