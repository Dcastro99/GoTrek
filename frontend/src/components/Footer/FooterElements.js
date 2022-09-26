import styled from 'styled-components';
import { Link as linkRouter } from 'react-router-dom';


export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 1rem; */
    /* border: 2px solid black; */
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    /* border: 2px solid black; */
`;

export const FooterLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 5px;
    /* border: 2px solid black; */
 `;

export const FooterLogo = styled(linkRouter)`
    cursor: pointer;
    margin-bottom: 20px;
    /* border: 2px solid black; */
   img  { 
        width: 80px; 
    }
    &:hover {
        transform: scale(1.1);
    }
`;

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 5px;
    /* border: 2px solid red; */
`;
export const FooterLinkColumn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   /* border: 2px solid black; */
   width: 20%;
`;

export const FooterLinkTitle = styled.h4`
    font-size: 1.1rem;
    text-transform: uppercase;
`;

export const FooterLink = styled(linkRouter)`
    width: auto;
    /* height: 30px; */
    text-decoration: none;
    color: black;
    /* border: 1px solid black; */

    &:hover {
        color: black;
        transform: scale(1.1);
    }
`;

export const FooterA = styled.a`
    width: auto;
    text-decoration: none;
    color: black;
    /* border: 1px solid black; */

    &:hover {
        color: black;
        transform: scale(1.1);
    }
`;

export const CopyRightContainer = styled.div`
    display: flex;
    margin-left: 80px;
    /* border: 2px solid black; */
    h4 {
        margin-top: 40px;
    }
`;

export const SocialMediaIconsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 10vh;
    justify-content: space-between;
    margin: 40px 0px 20px 0px;
    /* border: 2px solid black; */
    /* box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1); */
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: space-around;
    align-items: center;
    /* padding: 10px; */
    /* border: 2px solid blue; */
`;

export const SocialMediaIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50%;
    /* border: 2px solid blue; */
`;

export const SocialA = styled.a`
    display: flex;
    font-size: 2.4rem;
    color: black;
    /* text-decoration: none; */

    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        color: #44733D;
    }
`;


export const SocialMediaUl = styled.ul`

`;
export const SocialMediaTitle = styled.div`
    display: flex;
`;
