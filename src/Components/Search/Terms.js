import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 30em;
  margin: 0 auto;
  background: #CB356B;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #BD3F32, #CB356B);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #BD3F32, #CB356B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
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
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;



const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
   align-items: center;
  line-height: 1.8;
  color: #141414;

  h2{
      justify-content: flex-start;
    //   padding-bottom: 8em;
  }
  p {
    margin-bottom: 1rem; 
    justify-content: center;
    font-size: .85em;
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
  padding-top: 10em;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Terms = ({ modalShow, setModalShow, recipes }) => {
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: modalShow ? 1 : 0,
      transform: modalShow ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setModalShow(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && modalShow) {
          setModalShow(false);
          console.log('I pressed');
        }
      },
      [setModalShow, modalShow]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );




    return (
        <div id="terms">
                  {modalShow ? (
               <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper  modalShow={modalShow}>
              <ModalContent >
                  <div>
              <h2>Welcome To The Key!</h2>
                <p>We have commonly used filter options for your searched terms,<br />
                    this is located under "Additonal Filters" to the left of the main search bar.<br/>
                    This functionality however does not encompass all of the possible search terms for<br/>
                     'The Fridge Searcher App'.<br/>
                    Below is a key of all the search terns you can use outside of the "Additonal Filters" llist.<br/>
                    Disclaimer: These terms must be used as independent searches and cannot be used as filters.<br/>
                </p>
                <hr/>
                <ul>
                     RESTRICTIONS : 
                    <li> balanced, low-sugar,low-potassium, no-oil-added, sugar-conscious  </li>
                </ul>
                <ul>
                    ALLERGENS :
                    <li>alcohol-free, eggs-free, fish-free, celery-free, fodmap-free, low-fat-abs, lupine-free, mustard-free, pork-free, red-meat-free, sesame-free, tree-nut-free, wheat-free </li>
                </ul>
                <ul>
                    DIET :
                    <li>DASH, immuno-supportive, kidney-friendly, pescatarian </li>
                </ul>
                <ul>
                    CUISINE :
                    <li>Europe ,French, Japanese, Mediterranean, Middle Easten, Nordic, South American</li>
                </ul>
                <ul>
                    MEAL TYPE :
                    <li>Breakfast, Lunch, Dinner, Lunch/Dinner, Snack, Teatime</li>
                </ul>
                <ul>
                    DISH TYPE :
                    <li> Desserts, Drinks, Salad, Sandwiches, Side dish, Soup, Starter, sauces</li>
                </ul>
                </div>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => 
                    setModalShow(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}

       
        </div>
  
  );
                  }
                
export default Terms;