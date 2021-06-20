import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import roseWrapped from '../../../img/roseWrapped.png';

// ------------------------React Bootstrap--------------------------
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// ------------------STYLED COMPONENT---------------
import { ThankYouCard } from '../../2molecules/ThankYouCard/ThankYouCard';
export default function MyHome() {
  let textarea = document.querySelector('textarea') as HTMLTextAreaElement;

  // -------------------STATE OF FORM VALUE
  const [message, setMessage] = useState('');
  const [allMessage, setAllMessage] = useState([]);

  // ********************************FUNCTIONS************************
  const getMessageInstance = axios.create({
    baseURL: 'https://thank-you-backend.herokuapp.com/message',
  });
  function getMessage() {
    getMessageInstance.get('/get').then((res: any) => {
      setAllMessage(res.data.userData);
    });
  }
  getMessage();

  // ----------------------GLOBALFORMCHANGEHANDLER
  let globalEventHandler = (e: any) => {
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  };

  // --------------------------FORMSUBMITHANDLER
  let submitHandler = (e: any) => {
    e.preventDefault();
    console.log('SUBMITTED__________________-');

    axios
      .post('https://thank-you-backend.herokuapp.com/message/add', {
        data: {
          message: message,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    getMessage();

    textarea.value = '';
  };

  return (
    <>
      <main id="HomePage">
        <div className="containerCenter">
          <div className="contentBlock">
            <div id="leftDivision">
              <form action="" onSubmit={submitHandler}>
                <img src={roseWrapped} alt="" />

                <section className="addTokenCard">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                      {' '}
                      <strong> Add Your ThankYou Message</strong>
                    </Form.Label>
                    <Form.Control
                      name="message"
                      onChange={globalEventHandler}
                      as="textarea"
                      rows={2}
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Add Message
                  </Button>{' '}
                </section>
              </form>
            </div>
            <div id="rightDivision">
              <h1 className="gilda_regular">
                <span> Thank</span> You
              </h1>
              <h5>PUBLISHED GREETINGS</h5>

              <section className="cardSection">
                {(() => {
                  let newArray = allMessage.map((i: any, index) => {
                    return (
                      <>
                        <ThankYouCard
                          key={index}
                          className="gilda_regular tokencard"
                        >
                          <p>{i.message}</p>
                          <hr />
                          <details>-Anonymous</details>
                        </ThankYouCard>
                      </>
                    );
                  });
                  return newArray;
                })()}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
