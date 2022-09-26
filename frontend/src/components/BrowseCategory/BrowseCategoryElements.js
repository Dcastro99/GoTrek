import styled from 'styled-components';
import { Link as linkRouter } from 'react-router-dom';

export const BrowseContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 20px 0px 20px 0px;
    margin: 60px 0px 60px 0px;
    /* border: 1px solid black; */
`;

export const BrowseWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    /* border: 1px solid black; */
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
    /* border: 1px solid black; */
`;

export const BrowseCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    font-size: 1.5rem;
    margin: 20px;
    /* border: 1px solid black; */

    &:hover {
        transform: scale(1.1);
    }
    
`;

export const Link = styled(linkRouter)`
    /* background: pink; */
    text-decoration: none;

`;

export const BrowseImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
    /* border: 1px solid black; */
`;

export const BrowseText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    /* border: 1px solid black; */
`;