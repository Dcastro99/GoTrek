import styled from 'styled-components';

export const SplashSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SplashSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 70px;
    /* border: 2px solid black; */
`;

export const SplashSectionImage = styled.img`
    width: 80%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    /* margin: 30px; */
    border-radius: 10px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    /* border: 2px solid black; */
`;

export const SplashSectionVideo = styled.video`
    width: 80%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    margin: 30px;
    border-radius: 10px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;

export const Bar = styled.div`
    width: 90%;
    height: 20px;
    background: linear-gradient(90deg, rgba(20,38,21,1) 0%, rgba(34,64,33,1) 0%, rgba(185,191,164,0.6867121848739496) 93%);

    border-radius: 20px;
`;
