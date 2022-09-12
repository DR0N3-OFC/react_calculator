import styled from 'styled-components';

export const TitleContainer = styled.div`
    width: 100%;
    min-height: 100px;
    background-image: linear-gradient(to bottom, #121214, #202024);

    position: absolute;
    top: 0;
    left: 0;
    right: 0;


    font-size: 24px;
    font-family: 'Roboto';

    h1 {
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        
        font-size: 30px;
        font-family: 'Righteous';
        color: #00B37E;
        display: flex;
        align-items: center;
    }
`