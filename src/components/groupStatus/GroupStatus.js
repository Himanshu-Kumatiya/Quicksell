import React from 'react'
import { ListHeader } from '../listHeader/ListHeader'
import Card from '../card/Card';
import './groupStatus.css'
export const GroupStatus = ({ groupBy, orderBy, tickets }) => {
    const statusList = ['In progress', 'Backlog', 'Todo', 'Done', 'Cancelled']

    return (
        <div className="board-details-list">
            {
                statusList.map((status, i) => {
                    return (<div key={i} className="list-container">
                        <ListHeader
                            
                            groupBy={groupBy}
                            cardCount={tickets.filter(ticket =>ticket.status === status).length}
                            title={status} />
                        <div className="list-card-items">
                            {
                                tickets.map((ticket,id) => {
                                    if (ticket.status === status) {
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
