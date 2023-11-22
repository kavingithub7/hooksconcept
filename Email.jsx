import { useState } from "react";



const Email = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (name.trim() !== '' && /\S+@\S+\.\S+/.test(email)) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
  
        {isFormValid && (
          <div>
            <h2>your name and email</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Email;
  