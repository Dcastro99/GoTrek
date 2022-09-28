import styled from 'styled-components';
import { Link as linkRouter } from 'react-router-dom';


export const NavbarContainer = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
<<<<<<< HEAD
=======
    /* background-color: lightgreen; */
    margin: 20px 0px 0px 0px
>>>>>>> dev
`;

export const LogoContainer = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavLogo = styled(linkRouter)`
    cursor: pointer;
    // border: 2px solid black;
    img {
        width: 90px;
        border-radius: 10px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;
export const NavLogo2 = styled(linkRouter)`
    cursor: pointer;
    // border: 2px solid black;
    img {
        width: 50px;
        border-radius: 10px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const NavMenuContainer = styled.ul`
    height: 100%;
    width: 33%;
    display: flex;
    justify-content: sp;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
`;

export const NavMenuLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    margin-right: 180px;
`;

export const NavMenuLink = styled(linkRouter)`
    color: black;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    /* text-transform: uppercase; */
    /* transition: all 0.2s ease-in-out; */

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        color: #44733D;
    }
`;

export const NavSignupContainer = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: right;
    align-items: center;
    padding-right: 100px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    /* border: 2px solid black; */
`;

export const NavBtnLink = styled(linkRouter)`
    border-radius: 50px;
    background: #44733D;
    color: #fff;
    white-space: nowrap;
    padding: 10px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        border: 1px solid lightgray;
        /* background-color: #30592E; */
        color: black;
    }
    `;
export const Link1 = styled.nav`
    display: flex;
    align-items: center;
    margin:10px;
    /* border: 2px solid black; */
`;
export const Link2 = styled.nav`
display: flex;
align-items: center;
//  border: 2px solid black; 
`;
