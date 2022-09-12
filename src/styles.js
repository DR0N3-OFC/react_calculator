import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #202024;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    max-width: 400px;
    background-color: #121214;
    width: 50%;
    border: 5px #121214 solid;
    border-radius: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`