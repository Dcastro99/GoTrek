import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    /* border: 2px solid black; */
    /* margin: 30px; */
    margin-top: 30px;
    margin-bottom: 80px;
`;

export const CarouselCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid green;
    img {
        width: 70%;
    }
`;