import { useState } from 'react';

const Input1 = () => {
  const [firstName, setFirstName] = useState('');
  const [names, setNames] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();

    if (firstName) {
      setNames((names) => {
        return [...names, firstName];
      });
    } else {
      console.log('ble');
    }
    setFirstName('');
  };

  return (
    <section>
      <form>
        {/* <label htmlFor='userName'>Name: </label> */}
        <input
          type='text'
          placeholder='Name'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input onClick={formSubmit} type='submit' />
      </form>
      {names.map((oneName, index) => {
        return (
          <p className='item' key={index}>
            {oneName}
          </p>
        );
      })}
    </section>
  );
};

export default Input1;
