import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  /* 
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  /* transition: opacity 250ms $transitionCubic, visibility 250ms $transitionCubic; */
  /* overflow-y: scroll; */
`;

export const ModalStyles = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  /* position: absolute;
  top: 50%;
  left: 50%;
  max-width: 450px;
  width: 100%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px; */
  /* transition: transform 250ms $transitionCubic; */
`;
