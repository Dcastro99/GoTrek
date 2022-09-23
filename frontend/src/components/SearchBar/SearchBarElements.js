import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    /* background: lightblue; */
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 30px;
    padding: 5px;
`;

export const SearchBarForm = styled.form`
    width: 80%;
    /* border: 2px solid black; */
`;

export const Button = styled.button`
    width: 60px;
    border-radius: 10px;
    background: #44733D;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
    border: 1px solid lightgray;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        border: 1px solid lightgray;
        color: black;
    }
`;

export const Input = styled.input`
    width: 80%;
    height: 30px;
    /* background: pink; */
`;