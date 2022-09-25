import styled from 'styled-components';

export const TrailsMainContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const TrailCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    /* border: 2px solid black; */
    /* height: 80%; */
    /* background: pink; */
`;

export const TrailRowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-top: 30px;
    margin-bottom: 30px;
    /* padding: 10px; */
`;

export const TrailCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    /* border: 1px solid black; */
    padding: 10px;
    width: 25%;
    margin: 20px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: scale(1.08);
        transition: all 0.3s ease-in-out;
    }
`;

export const TrailImage = styled.div`
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
    /* background: lightblue; */
    /* border: 2px solid black; */
    width: 100%;
    /* border: 2px solid black; */
    margin-top: 10px;
`;

