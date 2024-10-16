import React from 'react'
import { ListHeader } from '../listHeader/ListHeader'
import Card from '../card/Card'
import './groupUser.css'
export const GroupUsers= ({users,groupBy,orderBy,tickets}) => {
    
    return (
        <div className="board-details-list">
            {
               users.map((user,i) => {
                    return (<div key={i} className="list-container">
                        <ListHeader 
                        
                        groupBy={groupBy} 
                        cardCount={
                            tickets.filter(ticket =>ticket.userId === user.id).length
                        } 
                        title={user.name} />
                        <div className="list-card-items">
                            {
                                
                                tickets.map((ticket,id) => {
                                    if (ticket.userId === user.id) {
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
