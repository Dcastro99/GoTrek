import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    /* background: lightgreen; */
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 80%;
    height: 80%;
    border: 2px solid black;
    /* background: lightblue; */
`;
export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 8px solid black;
    width: 25%;
    margin: 20px;
    margin-bottom: 15rem;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;
export const ProfileImage = styled.div`
    img{
        width: 100%;
    }
`;
export const ProfileInformation = styled.div`
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
export const ProfileBio = styled.div`
box-sizing:border-box;
display: flex;
flex-direction: column;
align-items:left;
justify-content: center;
border-radius: 10px;
border: 8px solid black;
width: 40%;
height: 30%;
margin: 20px;
margin-bottom: 15rem;
// box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

`;

export const ProfileTrailContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:30%
    height: 30%;
    // border: 8px solid black;
    /* background: lightgreen; */
`;
export const ProfileTrailCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid black;
    width: 20%;
    heigth: 10%;
    margin: 20px;
    margin-bottom: 15rem;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;