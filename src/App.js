import './App.css';
import './bootstrap502/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useRef} from 'react';

function App() {
  const [show, setShow] = useState(false);
  const fname = useRef(null);
  const sname = useRef(null);
  const date = useRef(null);
  const gender = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleClose = event => {
    setShow(false);
    fname.current.value = '';
    sname.current.value = '';
    date.current.value = '';
    gender.current.value = '';
    email.current.value = '';
    pass.current.value = '';
  };

  const handleSubmit = event => {
    setShow(true);
    console.log('Register done : ', fname.current.value);
  };
  return (
    <div className="Home">
      <div className="Card">
        <div className='row head-section'>
          <div className='col-12'>
            <h1>Register</h1>
          </div>
        </div>
        <div className='form'>
          <div className='row'>
            <div className='col-xl-6 col-12'>
              <p>Name</p>
              <input className='form-control'
              ref={fname}></input>
            </div>
            <div className='col-xl-6 col-12'>
              <p>Surname</p>
              <input className='form-control'
              ref={sname}></input>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-6 col-12'>
              <p>Date of Birth</p>
              <input className='form-control' ref={date} type='date'/>
            </div>
            <div className='col-xl-6 col-12'>
              <p>Gender</p>
              <select className='form-control' ref={gender}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          
          <div className='row'>
            <div className='col-xl-6 col-12'>
              <p>Email</p>
              <input className='form-control' ref={email}></input>
            </div>
            <div className='col-xl-6 col-12'>
              <p>Password</p>
              <input className='form-control' ref={pass}></input>
            </div>
          </div>

        </div>
        <div className='btn-zone'>
          <button className='btn btn-theme' onClick={handleSubmit}>Register</button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>All Done !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <b>{fname.current.value}</b> have register successfully !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='btn btn-theme' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

    
  );
}

export default App;
