import styled from 'styled-components';

export const ExploreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    border: 3px solid black;
    /* background: lightgreen; */
`;

export const ExploreWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    border: 2px solid black;
    background: white;
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: green; */
    border: 2px solid black;
    height: 13%;
    width: 80%;
    margin: 15px 0px;
`;

export const FilterNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    margin: 10px, 0px;
    border: 2px solid black;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    background: lightblue;
    width: 15%;
    height: 100%;
    border: 2px solid blue;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: 100%;
    border: 3px solid green;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px 0px;
    width: 100%;
    height: 25%;
    border: 2px solid black;
`;