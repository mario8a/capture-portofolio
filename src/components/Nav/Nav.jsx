import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledLine, StyledNav, StyledLine2, StyledLine3 } from './NavStyles';

export const Nav = () => {
   const { pathname } = useLocation();

   return (
      <StyledNav>
         <h1>
            <Link id="logo" to="/">
               Mario Ochoa
            </Link>
         </h1>
         <ul>
            <li>
               <Link to="/">Acerca de</Link>
               <StyledLine 
                  transition={{duration: 0.5}}
                  initial={{width: "0%"}}
                  animate={{width: pathname === "/" ? "40%" : "0%"}}
               />
            </li>
            <li>
               <Link to="/work">Nuestro trabajo</Link>
               <StyledLine2 
                  transition={{duration: 0.5}}
                  initial={{width: "0%"}}
                  animate={{width: pathname === "/work" ? "40%" : "0%"}}
               />
               </li>
            <li>
            <Link to="/contact">Contactanos</Link>
            <StyledLine3 
               transition={{duration: 0.5}}
               initial={{width: "0%"}}
               animate={{width: pathname === "/contact" ? "40%" : "0%"}}
            />
            </li>
         </ul>
      </StyledNav>
   )
}