import styled from 'styled-components';

export const AverageSessionLengthStyles = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 258px;
    height: 263px;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F00;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
    p{
        position: absolute;
        color: #FFF;
        margin: 0;
        font-size: 15px;
        font-weight: 500;
        opacity: 0.504;
        line-height: 24px;
        top: 29px;
        left: 34px;
    }
`;

export const CustomTooltipStyle = styled.div`
    display: flex; 
    justify-content: center;
    align-content: center; 
    background-color: #FFF;
    font-size: 8px;
    font-weight: 500;
    line-height: 24px;
    color: #000;
    width: 39px;
    height: 25px;
`;


export const BackgroundRedDark = styled.div`
    position: absolute;
    width: 75px;
    height: 100%;
    right: 0px;
    opacity: 0.0975;
    background: #000;
`;
