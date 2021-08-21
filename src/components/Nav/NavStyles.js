import styled from "styled-components";
import { motion } from 'framer-motion';


export const StyledNav = styled.nav`
   min-height: 8vh;
   display: flex;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 10px;
   background: #282828;
   position: sticky;
   top: 0;
   z-index: 90;

   a {
      color: white;
      text-decoration: none;
   }

   ul {
      list-style: none;
      display: flex;
      justify-content: center;

      li {
         padding: 0 6rem;
         position: relative;
      }
   }

   #logo {
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
   }

   @media (max-width: 768px) {
    flex-direction: column;
    /* padding: 2rem rem; */

    /* Cuando se tenga un problema y se quiera ponerle margin o padding a un <a></a>
    se tiene q poner un display: inline-block */
    #logo {
      display: inline-block;
      margin: 2rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }
`;

export const StyledLine = styled(motion.div)`
   height: 0.3rem;
   background: #23d997;
   width: 0;
   position: absolute;
   bottom: -80%;
   left: 30%;

   @media (max-width: 768px) {
      left: 0%;
   }
`;

export const StyledLine2 = styled(StyledLine)`
  left: 30%;

  @media (max-width: 768px) {
      left: 5%;
   }
`;
export const StyledLine3 = styled(StyledLine2)`
  left: 30%;

  @media (max-width: 768px) {
      left: 5%;
   }
`;