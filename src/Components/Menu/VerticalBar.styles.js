import styled from 'styled-components';

export const VerBar = styled.div`
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    flex-shrink: 0;
    width: 117px;
    background: #020203;
    height: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    p {
        transform: rotate(-90deg);
        color: #FFF;
        white-space: pre;
        font-size: 12px;
    }
`;

export const VerNav = styled.nav`
    display: flex;
    width: 64px;
    height: 316px;
    flex-shrink: 0;
    flex-direction: column;
    margin-top: 150px;
    justify-content: space-between;
    img {
        cursor: pointer;
    }
`;

