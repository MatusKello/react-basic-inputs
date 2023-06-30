import { useState } from 'react';

const Input2 = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();

    if (fullName && email) {
      const oneUser = { fullName: fullName, email: email };
      setUsers((users) => {
        return [...users, oneUser];
      });
    } else {
      console.log('something wrong');
    }
    setEmail('');
    setFullName('');
  };

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          type='text'
          placeholder='Name'
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type='email'
          placeholder='Email'
        />
        <input type='submit' />
      </form>
      {users.map((oneUser, index) => {
        const { fullName, email } = oneUser;
        return (
          <div className='item' key={index}>
            <h4>{fullName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Input2;
