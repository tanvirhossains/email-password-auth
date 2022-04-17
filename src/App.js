import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import './App.css';
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";


const auth = getAuth(app)
function App() {

  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }


  const handleSubmitbutton = event => {
    // event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return

    }
    if (!/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)) {
      setError('plese enter at least one charecter !!')
      return
    }

    setValidated(true);
    setError('')
    createUserWithEmailAndPassword(auth, email, password)
      .then(credential => {
        console.log(credential.user)
      })
      .then(error => {
        console.error(error)
      })

    event.preventDefault()  //this line for handle reload in the UI
  }

  return (
    <div >
      <div className="regester w-50 mx-auto" >
        <h1 className="text-primary">Please register!!!</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmitbutton}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please choose a valid password.
            </Form.Control.Feedback>
          </Form.Group>
         <p className="text-danger"> {error}</p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
