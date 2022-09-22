import styled from 'styled-components';
import { Link as linkRouter } from 'react-router-dom';


export const NavbarContainer = styled.nav`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
<<<<<<< HEAD
    background-color: lightgreen;
`;

export const LogoContainer = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
`;

export const NavLogo = styled(linkRouter)`
    cursor: pointer;
    img {
        width: 100px;
        border-radius: 10px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const NavMenu = styled.ul`
    height: 100%;
    width: 33%;
    display: flex;
    justify-content: sp;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    border: 2px solid black;
`;

export const NavSignup = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
=======
    background-color: #44733D;
>>>>>>> dev
`;