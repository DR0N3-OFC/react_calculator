import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    margin: 2px;
    border: 1px solid #7C7C8A;
    background-color: #323238;
    color: #00B37E;
    font-size: 24px;
    font-weight: 700;
    border-radius: 10px;

    flex: 1;

    &:hover {
        opacity: 0.6;
    }

    &:active {
        outline: 1px solid #00B37E;
    }
`