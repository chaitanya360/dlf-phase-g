import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  background-color: white;
  height: fit-content;
  text-align: center;
  color: rgb(56, 55, 55);
  text-align: center;
  font-size: 1.7rem;
  font-weight: 500;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.486);
  padding: 0.5rem 0;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const ButtonStyle = styled.button`
  background-color: white;
  padding: 10px 5px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.363);
  font-weight: 600;
  color: purple;
  cursor: pointer !important;
  width: 100%;
  margin: 10px 0;
  font-size: 1rem;
  border-radius: 18px;
  z-index: 2;

  .area {
    color: var(--font-medium);
    margin-top: 5px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  :hover {
    background-color: var(--clr-purple-faded);
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--clr-selected-btn-bg);
      color: white;

      .area {
        color: white;
      }
      :hover {
        background-color: var(--clr-selected-btn-bg);
      }
    `}@media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 13px;
    margin: 0.7rem 1px;
  }
`;

export const ButtonsContainerStyle = styled.div`
  position: absolute;
  z-index: 2;
  left: 10px;
  top: -45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    top: -10px;
  }

  .close-btn {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid black;
    padding: 0.2rem 1rem;
    border-radius: 65px;
    font-weight: 600;
    z-index: 3;
    cursor: pointer;
    img {
      transition: transform linear 300ms;
      width: 30px;
      height: 30px;
    }

    :hover {
      border-color: purple;
    }
  }

  .buttons {
    z-index: 4;
    width: 180px;
    height: 650px;
    transition: height linear 500ms;
    overflow: hidden;
  }

  ${(props) =>
    props.collapsed &&
    css`
      .close-btn {
        img {
          transform: rotate(180deg);
        }
      }
      .buttons {
        height: 0;
        z-index: 4;
      }
    `}

  ::before {
    content: "";
    display: block;
    width: 3px;
    background-color: var(--clr-purple);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    z-index: -1;
  }

  @media only screen and (max-width: 600px) {
    .buttons {
      width: 150px;
      /* height: 250px; */
    }
    .close-btn {
      width: 10px;
      height: 20px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    left: 0;
    margin-left: 0;
    ::before {
      height: 65%;
    }
  }
`;

export const MainLayoutStyle = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ModelViewerStyle = styled.section`
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
    width: 100vw;
    height: 90vh;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  #viewer-container {
    height: 100%;
    width: 100%;
  }
`;
