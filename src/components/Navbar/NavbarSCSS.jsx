import styled from 'styled-components'

export const Nav = styled.nav`
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    background-color: #F03355;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const Earth1Logo = styled.img`
    width: 10.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-left: 2.5rem;
`;

export const ButtonBox = styled.div`
    display: flex;
    margin-right: 2.5rem;
    gap: 1rem;

    button {
        padding: 0.4rem;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        transition: all 1s;
        cursor: pointer;

        :hover {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
`;