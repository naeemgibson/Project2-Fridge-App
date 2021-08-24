import React, { useRef, useEffect, useCallback, useState, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import imageModal from '../../Media/images/modal.jpg'
// import  UserContext  from '../../UseContext';
const Background = styled.div`
  width: 100%;
  height: 40em;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.8);
  padding-right: .2em
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1
  overflow : auto
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 555px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
    // const {login} = useContext(UserContext);
    // const [name, setName] = useState();
    
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );

   
   


    return (
        <div id="login">
                  {showModal ? (
               <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper  showModal={showModal}>
              <ModalImg src={imageModal} alt='camera' />
              <ModalContent >
                <h2>Making a difference is simple!</h2>
                <p>Sign Up today to track your impact!</p>
                <form action="/action_page.php">
                <label for="uname">Username:</label>
                <input type="text" id="uname" name="uname" 
                // onChange={(event) =>{setName(event.target.value);}}
                ></input><br/><br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"></input><br/><br/>
                <input
                //  onClick={() => login(name)} type="submit" value="Join Now"
                 ></input>
                </form>
                
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}

       
        </div>
  
  );
                  
                  }
export default Modal;