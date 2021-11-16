import React, { useEffect } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled.div`
  display: ${({show}) => (show ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.65);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  justify-content: space-around;
`;

const CloseIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
`;

const CloseIconCustom = styled(CloseIcon)`
  width: 40px !important;
  height: 40px !important;
`;

const Popup = ({ show = false, closeFn = () => {}, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // whenever the popup is closed
    // revert back to overflow unset
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  return (
    <Wrapper show={show}>
      <CloseIconContainer>
        <CloseIconCustom 
          onClick={() => closeFn()}
        />
      </CloseIconContainer>
      {children}
    </Wrapper>
  )
}

export default Popup;
