import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    border: 2px solid black;
    /* margin: 100px; */
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const CarouselCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1); */
    border: 2px solid green;
    img {
        width: 50%;
        /* box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1); */

    }
`;

export const CarouselImage = styled.img`
    width: 100%;
`

