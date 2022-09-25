import styled from 'styled-components';


export const FooterContainer = styled.footer`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: #44733D;
    margin: 10px 0px 0px 0px

`;
export const FooterLogo = styled.div`
   height: 20px;
   weight: 20px;
   img{ width: 70px; margin-left: 120px;}
   margin: 5px 0px 0px 0px
`;

export const FooterLogoContainer = styled.div`
 height: 80px;
//  border: 3px solid purple;
 display: flex;
 width: 80%;

 `;

export const FooterLinkContainer = styled.div`
// border: 3px solid red;
display: flex;
justify-content: space-between;

width: 80%;
padding: 10px 10px 10px 10px;
`;
export const FooterLink = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
//    border: 2px solid black;
   width: 20%;
`;

export const FooterA = styled.a`
    width: auto;
    height: 30px;
    // border-radius: 10px;
`;

export const SocialMediaContainer = styled.div`

    display: flex;
    width: auto;
    width: 80%;
    justify-content: space-between;
    // border: 2px solid yellow;
`;
export const CopyRight = styled.div`
  display: flex;
  margin: 40px 30px 0px 120px;
  
`;

export const SocialMedia = styled.div`
display: flex;
flex-direction: column;
// border: 2px solid blue;
width: 40%;
justify-content: space-around;
align-items: center;
margin: 0px 50px 0px 0px;
`;

export const SocialA = styled.div`
display: flex;
`;

export const SocialMediaIcons = styled.div`
display: flex;
`;
export const SocialMediaTitle = styled.div`
display: flex;
`;
