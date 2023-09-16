import styled from 'styled-components';

export const HorBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 91px;
    background: #020203;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 91px;
    flex-shrink: 0;
    img {
        width: 178px;
        padding-left: 30px;
    }
`;

export const NavHor = styled.nav`
    width: 70%;
    display: flex;
    padding-right: 90px;
    justify-content: space-between;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
`;

export const NavItem = styled.div`
    color: #FFFFFF;
    cursor: pointer;
`;