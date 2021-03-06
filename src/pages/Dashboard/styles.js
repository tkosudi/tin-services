import styled from "styled-components";
import { FiHome, FiUser, FiMap, FiLogOut } from "react-icons/fi";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;

    button {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--glass-bg);
      background-color: var(--blue-400);
      border-top: 2px solid rgba(255, 255, 255, 0.5);
      border-left: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
      transition: all 200ms ease-in;

      img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
      }

      &:active {
        opacity: 0.6;
      }
    }

    button.logout {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--glass-bg);
      background-color: lightcoral;
      border-top: 2px solid rgba(255, 255, 255, 0.5);
      border-left: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
      transition: all 200ms ease-in;

      &:active {
        opacity: 0.6;
      }
    }
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
    margin-left: -1rem;
  }

  @media (max-width: 500px) {
  }

  @media (max-width: 400px) {
  }
`;

export const Logo = styled.div`
  margin-right: 10px;

  @media (max-width: 390px) {
    margin-left: 10px;
  }
`;

// export const LogoImage = styled.img`
//   width: 100px;
//   height: 35px;
//   border: none;

//   @media (max-width: 500px) {
//     width: 150px;
//     height: 45px;
//   }

//   @media (max-width: 370px) {
//     width: 150px;
//     height: 45px;
//   }

//   @media (max-width: 280px) {
//     width: 120px;
//     height: 45px;
//   }
// `;

export const LogoAvatar = styled.img`
  width: 30px;
  border: none;
  border-radius: 50%;

  @media (min-width: 1920px) {
  }
`;

export const Avatar = styled.div`
  /* font-style: normal;
  font-weight: bold;
  font-size: 2rem; */

  color: var(--text);

  @media (min-width: 1920px) {
    /* font-size: 2.7rem; */
  }

  @media (max-width: 390px) {
    /* width: 65vw;
    font-size: 1.8rem; */
  }

  @media (max-width: 600px) {
    /* width: 51vw; */
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: var(--blue-400);
  width: 12rem;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  color: var(--white);
  transition: filter 200ms ease-in;

  @media (max-width: 1190px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const HomeIcon = styled(FiHome)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const UserIcon = styled(FiUser)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const MapIcon = styled(FiMap)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const OutIcon = styled(FiLogOut)`
  color: red;
  font-size: 2.5rem;
`;
