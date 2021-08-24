import React, { useRef, useEffect, useCallback,useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import imageModal from '../../Media/images/modal.jpg'

const Background = styled.div`
  width: 100%;
  height: 40em;
  margin: 0 auto;
  background: #348F50;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #56B4D3, #348F50);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #56B4D3, #348F50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
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

export const Ingredients = ({ modalShow, setModalShow, recipes, clickedIndex }) => {
    const [idFun1, setIdFun1] = useState()

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
  

    function idfun() {
      if (clickedIndex == null) {
          return
      } else {
          // setIdFun1(clickedIndex)
          console.log(clickedIndex)
          // console.log(idFun1)
      }
  }
idfun();
    return (
        <div id="ingredients" >
                  {modalShow ? (
               <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper  modalShow={modalShow}>
              <ModalImg src={imageModal} alt='camera' />
              <ModalContent >
                  <div>
              {recipes
            .map((recipe, i) => (
        <div key={recipe.recipe.uri} className="gif" id={i} >
    {/* <h4>{recipe[[idFun1].i].label}</h4>     */}
    {/* <img id="gal-img" src={recipe.recipe.image} alt={recipe.recipe.label} />   */}
    </div>))} 
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
                
export default Ingredients;