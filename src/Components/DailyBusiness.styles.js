import styled from 'styled-components';

export const DailyBusinessStyle = styled.div`
position: relative;
    display: flex;
    width: 100%;
    height: 320px;
    border-radius: 5px;
    flex-shrink: 0;
    margin-bottom: 20px;
    background: #FBFBFB;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
    p {
        position: absolute;
        left: 50px;
        top: 10px;
        width: 100%;
        color: #20253A;
        font-size: 15px;
        font-style: normal;
        font-weight: bold;
        line-height: 24px;
    }
`;