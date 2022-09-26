import styled from 'styled-components';

export const ProfileTrailCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid black;
    width: 100%;
    heigth: 10%;
  
    // margin-bottom: 15rem;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;
export const ProfileTrailInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: lightblue; */
    /* border: 2px solid black; */
    width: 100%;
    /* border: 2px solid black; */
    margin-top: 10px;
`;
export const ProfileTrailImage = styled.div`
display: flex;
        justify-content: center;
        padding-top: 30px;
    img{
        width: 70%;
    }
`;
export const TrailCardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 70%;
margin: 10px 0px 10px 0px
// border: 2px solid black;

`;