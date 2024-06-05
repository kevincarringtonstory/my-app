import { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('Kevin');

  const buttonClick = () => {
    setName('Marium');
  };
  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <h1>
        &quot;I swear by my pretty floral bonnet, I will end you {name}.&quot;
      </h1>
      <div>
        <button onClick={() => buttonClick()}></button>
      </div>
    </div>
  );
}

export default Greeting;
