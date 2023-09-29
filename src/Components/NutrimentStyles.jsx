import styled from 'styled-components';

export const NutrimentStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 124px;
    padding-left: 10%;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FBFBFB/* #FBFBFB */;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
    img{
        width: 60px;
        height: 60px;
        flex-shrink: 0;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 60px;
        padding-left: 10%;
        p:first-child {
            color: #282D30;
            font-weight: 700;
            font-size: 20px;
        }
        p:nth-child(2) {
            color: #74798C;
            font-weight: 500;
            font-size: 14px;
        }
    }    
    p{
        margin: 0;
    }

`;


