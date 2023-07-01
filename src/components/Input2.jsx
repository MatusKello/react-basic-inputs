import { useState } from 'react';

const Input2 = () => {
  /*   const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(''); */

  const [oneUser, setOneUser] = useState({ fullName: '', email: '', age: '' });
  const [users, setUsers] = useState([]);

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //!dynamic object
    setOneUser({ ...oneUser, [name]: value });
  };

  //!refactoring
  const formSubmit = (e) => {
    e.preventDefault();
    if (oneUser.fullName && oneUser.email && oneUser.age) {
      /* const newUser = {
        fullName: oneUser.fullName,
        email: oneUser.email,
        age: oneUser.age,
      }; */
      const newUser = { ...oneUser, id: new Date().getTime() };
      setUsers((users) => {
        return [...users, newUser];
      });
      setOneUser({ fullName: '', email: '', age: '' });
    } else {
      console.log('something wrong');
    }
    /*     setFullName("")
    setEmail("")
    setAge("")  */
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          value={oneUser.fullName}
          name='fullName'
          onChange={handleFormChange}
          type='text'
          placeholder='Name'
        />
        <input
          value={oneUser.email}
          name='email'
          onChange={handleFormChange}
          type='email'
          placeholder='Email'
        />
        <input
          value={oneUser.age}
          name='age'
          onChange={handleFormChange}
          type='text'
          placeholder='Age'
        />
        <input type='submit' />
      </form>
      {users.map((oneUser) => {
        const { id, fullName, email, age } = oneUser;
        return (
          <div className='item' key={id}>
            <h4>{fullName}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Input2;
