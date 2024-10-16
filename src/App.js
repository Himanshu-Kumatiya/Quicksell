import './App.css';
import { useState, useEffect } from 'react'
import Display from './components/Display/Display';
import { GroupStatus } from './components/groupStatus/GroupStatus';
import { GroupUsers } from './components/groupUsers/GroupUsers';
import { GroupPriority } from './components/GroupPriority/GroupPriority';
function App() {
  const [groupBy, setGroupBy] = useState('status')
  const [orderBy, setOrderBy] = useState('title')
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  function handleGroupBy(value) {
    setGroupBy(value);
    console.log(value);
  }
  function handleOrderBy(value) {
    setOrderBy(value);
    console.log(value);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        //await refactorData(response);
        if (response.status === 200) {
          const res = await response.json();
          console.log(res);
          let ticket = [];
          for (let i = 0; i < res.tickets.length; i++) {
            for (let j = 0; j < res.users.length; j++) {
              if (res.tickets[i].userId === res.users[j].id) {
                let ticketObj = { ...res.tickets[i], userDetail: res.users[j] }
                ticket.push(ticketObj);
              }
            }
          }
          setUsers(res.users);
          setTickets(ticket);
          orderDataByValue(ticket);
        }
        else {
          throw new Error("Something went wrong");
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();

  }, [orderBy, groupBy])
  async function orderDataByValue(ticket) {
    if (orderBy === 'priority') {
      ticket.sort((a, b) => b.priority - a.priority);
    } else if (orderBy === 'title') {
      ticket.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        return 1;
      });
    }
    setTickets(ticket);
  }
  return (
    <div className="App">
      <Display
        groupBy={groupBy}
        orderBy={orderBy}
        handleGroupBy={handleGroupBy}
        handleOrderBy={handleOrderBy}
      />
      <div className="board-details">
        {groupBy === 'status' && 
        <GroupStatus
          orderBy={orderBy}
          tickets={tickets}
          groupBy={groupBy}
        />
        }
        {groupBy === 'user' && <>
          {
             <GroupUsers
             orderBy={orderBy}
             tickets={tickets}
             groupBy={groupBy}
             users={users}
           />
          }
        </>
        }
        {groupBy === 'priority' && <>
          {
             <GroupPriority
             orderBy={orderBy}
             tickets={tickets}
             groupBy={groupBy}
             users={users}
           />
          }
        </>
        }
      </div>
    </div>
  );
}

export default App;
