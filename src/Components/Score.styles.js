import styled from 'styled-components';

export const ScoreStyles = styled.div`
    position: relative;
    width: 258px;
    height: 263px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);

`;

export const ScoreTitle = styled.p`
    margin: 0;
    position: absolute;
    top: 24px;
    left: 30px;
    color: #20253A;
    font-size: 15px;
    font-weight: bold;
`

export const ScoreText = styled.p`
    margin: 0;
    text-align: center;
    position: absolute;
    z-index: 1;
     top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #74798C;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    span {
        color: #282D30;
        text-align: center;
        font-family: Roboto;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 100% */
    }
`;