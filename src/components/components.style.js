import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  background-color: white;
  height: fit-content;
  text-align: center;
  color: rgb(56, 55, 55);
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.486);
  padding: 1rem 0;

  @media only screen and (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.5rem;
  }
`;

export const ButtonStyle = styled.button`
  background-color: white;
  padding: 10px 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.363);
  font-weight: 600;
  color: var(--font-medium);
  cursor: pointer !important;
  width: 100%;
  margin: 10px 0;
  font-size: 1.1rem;
  border-radius: 18px;
  z-index: 2;

  :hover {
    border-color: dodgerblue;
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--clr-selected-btn-bg);
      color: white;
      :hover {
        border-color: var(--clr--selected-btn-bg);
        border-color: var(--clr-selected-btn-bg);
      }
    `}

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 13px;
    margin: 10px 1px;
  }
`;

export const ButtonsContainerStyle = styled.div`
  position: absolute;
  z-index: 2;
  left: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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
    height: 400px;
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
    height: 20px;
    background-color: var(--clr-purple);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    z-index: -1;
  }

  @media only screen and (max-width: 600px) {
    top: 100%;
    left: 0;
    width: 100%;
    height: fit-content;
    transform: translate(0, -140%);
    flex-direction: row;
    justify-content: center;
    height: fit-content;
    margin-left: 0;
    ::before {
      display: none;
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
`;
