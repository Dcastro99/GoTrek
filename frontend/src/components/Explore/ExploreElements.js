import styled from 'styled-components';

export const ExploreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: auto; */
    width: 100%;
    /* border: 3px solid red; */
    margin-top: 20px;
    /* background: lightgreen; */
`;

export const ExploreWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    background: white;
    margin-bottom: 25px;
    /* border: 3px solid red; */
`;

export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 80vh;
    /* border: 5px solid red; */
`;

export const TopSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* height: 200px; */
    width: 80%;
    margin: 20px 0px;
    /* border: 2px solid black; */
    /* background-color: lightblue; */
`;

export const FilterOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    /* border: 2px solid black; */
`;

export const FilterOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    /* height: 100%; */
    /* margin: 10px, 0px; */
    /* border: 2px solid black; */
`;

export const FilterButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid green;
    border-radius: 20px;
    padding: 10px;
    /* width: 20px; */
    font-weight: 600;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        color: #44733D;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    /* background: lightblue; */
    /* max-width: 200px; */
    width: 25%;
    height: 100%;
    /* border: 2px solid blue; */
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: 100%;
    /* border: 3px solid green; */
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