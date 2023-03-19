import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import {auth,provider} from './config';
import {signInWithPopup} from 'firebase/auth';
import Layout from '../components/Layout/Layout.js';
import  { useEffect, useState } from 'react';


  function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem('email',data.user.email)
        })
    }
    useEffect(()=>{
      setValue(localStorage.getItem('email'))
  },[])
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' /* onSubmit={submitHandler}*/>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                   // ref={loginNameRef}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                   // ref={loginPasswordRef}
                  ></input>
                </div>
                <div>
                <button type='submit' className='addToCart__btn' onClick={handleClick}>
                  Login
                </button>
                </div>
                
        
              </form>
              <div>
                {/* {value?<Home />:
                <button type='submit' className='addToCart__btn' onClick={handleClick}>
                  Register With Google
                </button> } */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignIn;
