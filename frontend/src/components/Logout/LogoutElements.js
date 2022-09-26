import styled from 'styled-components';

export const LogoutButtonContainer = styled.div`
border-radius: 50px;
background: #44733D;
color: #fff;
white-space: nowrap;
padding: 10px 20px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid lightgray;
    /* background-color: #30592E; */
    color: black;
}

`;