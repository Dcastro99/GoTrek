import styled from 'styled-components';

export const TrailsMainContainer = styled.div`
    width: 100%;
    min-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    /* border: 5px solid red; */
`;

export const TrailCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    min-width: 390px;
    position: relative;

    /* background: blue; */
    /* border: 3px solid green; */

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        /* height: 1000px; */
    }
`;
export const TrailRowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    height: 100%;
    /* height: 400px; */
    width: 90%;
    min-width: 380px;
    /* margin-top: 30px; */
    /* margin-bottom: 30px; */
    /* background: pink; */
    /* border: 1px solid black; */

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        height: 100%;

        /* background: lightgreen; */
        /* width: 90%; */
    }
`;

export const TrailCard = styled.div`
    /* width: 25%; */
    height: 20rem;
    /* height: 100%; */
    width: 20%;
    /* min-width: 300px; */
    min-width: 300px;
    min-height: 300px;
    perspective: 150rem;
    position: relative;
    /* position: absolute; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    box-shadow: none;
    background: none;
    cursor: pointer;
    /* border: 1px solid black; */
    
    /* @media screen and (max-width: 1310px){
        width: 40%;
        min-width: 200px;
        min-height: 300px;
    }
    @media screen and (max-width: 879px){
        width: 40%;
        min-width: 200px;
    } */
    
    @media screen and (max-width: 768px){
        width: 70%;
        min-width: 250px;
    }
`;

export const CardFront = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    /* height: 300px; */
    min-width: 200px;
    min-height: 250px;
    
    transition: all 0.8s ease;
    backface-visibility: hidden;
    position: relative;
    top: 0;
    left: 0;
    /* padding:2rem; */

    color: black;
    border-radius: 15px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
    /* border: 3px solid red; */
    
    &:hover {
        transform: rotateY(180deg);
    }
`;

export const CardBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 250px;
    /* height: 25rem; */
    
    transition: all 0.8s ease;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    
    /* padding:2rem; */
    color: white;
    
    border-radius: 15px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
    /* border: 3px solid red; */
    
    transform: rotate(-180deg);
    
    &:hover {
        transform: rotateY(0deg);
    }
`;

export const TrailImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100;
    margin: 10px;
    /* min-width: 200px; */
    height: 80%;
    /* border: 1px solid black; */

    h3 {
        margin-top: 15px;
        font-size: 1.5em;
        /* color: #fff; */
    }

    img{
        width: 100%;
        border-radius: 10px;
    }
`;

export const TrailInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    /* color: white; */
    /* margin-top: 10px; */
    /* background: lightblue; */
    text-align: center;
    /* border: 1px solid black; */
    h5 {
        font-size: 1.1rem;
    }
    P {
        font-size: 1rem;
    }
`;

