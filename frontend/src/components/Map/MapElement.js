import styled from 'styled-components';
import { Link as linkRouter} from 'react-router-dom';


export const MapContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: none;
    /* border: 2px solid red; */
`;


export const MapWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* border: 2px solid red; */
`;

export const MapText = styled.div`
    width: 100px;
    border: 3px solid white;
    color: red;
    /* width: 400px; */
    h1 {
        color: white;
        font-size: 1em;
    }
`;
// export const MapButton = styled.button`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 40px;
//     height: 20px;
//     border-radius: 15px;
//     background-color: #44733D;
//     color: white;
//     border: none;

//     &:hover {
//         transform: scale(1.2);
//     }
// `;


export const ButtonLink = styled(linkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 40px; */
    /* height: 20px; */
    border-radius: 15px;
    background-color: #44733D;
    color: white;
    border: none;
    padding: 10px;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        transition: all 0.6s ease-in-out;
        color: black;
        background-color: #fff;
        /* visibility: hidden; */
    }
`;

// export const Image = styled.img`
//     width: 10%;
// `;


// export const HikeIcon = styled.div`
//     font-size: 5px;
//     color: white;
//     transform: rotate(-90deg);
// `;
