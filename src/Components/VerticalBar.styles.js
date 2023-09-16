import styled from 'styled-components';

export const VerBar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    width: 117px;
    height: 933px;
    background: #020203;
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
    margin-top: 256px;
    margin-bottom: 164px;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: space-between;
    img {
        cursor: pointer;
    }
`;

