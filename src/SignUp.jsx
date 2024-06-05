import { useState } from 'react';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const signUp = () => {
    console.log(name);
    console.log(email);
    console.log(acceptTerms);
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <div>
        <label htmlFor="name">Name: </label> {/* Associated with input below */}
        <input
          id="name" // Matches label's htmlFor attribute
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>{' '}
        {/* Associated with input below */}
        <input
          id="email" // Matches label's htmlFor attribute
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="acceptTerms">Accept Terms? </label>{' '}
        {/* Associated with input below */}
        <input
          id="acceptTerms" // Matches label's htmlFor attribute
          type="checkbox"
          checked={acceptTerms}
          onChange={(event) => setAcceptTerms(event.target.checked)}
        />
      </div>
      <button type="button" onClick={signUp}>
        Sign Up
      </button>{' '}
      {/* Explicitly set type="button" */}
    </div>
  );
}

export default SignUpForm;
