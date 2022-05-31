import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
// import Search from './components/Users/Search';
import Search from './components/Users/Search';

function App() {
  
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState('');
  const [filterUsersList, setfilterUsersList] = useState([])

  let filterUsers = null;
  const onSearchHandler = query => {
    if(query === ''){
      setfilterUsersList(usersList);
      return;
    }
    setfilterUsersList(usersList.filter(user =>user.email.includes(query)))
  } 

  const addUserHandler = (email, age) => {

    if(email.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Inputs',
        message: 'Please Enter a valid email and age.'
      });
      return;
    }
    if(+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age'
      });
      return;
    }
    // userList.some(user => user.email === email)
    if(usersList.find(user => user.email === email)) {
      setError({
        title: 'Duplicate Email',
        message: 'Email address must be unic.'
      });
      return;
    }
    setUsersList(prevUsersList => [...usersList, {email , age, id: Math.random().toString()}]);
    setfilterUsersList(prevUsersList => [...filterUsersList, {email , age, id: Math.random().toString()}]);
  };

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <Search onSearch={onSearchHandler} />
      <UsersList users={filterUsersList} />
    </div>
  );
}

export default App;
