import styled from 'styled-components'

export const Nav = styled.nav`
    z-index: 1;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    background-color: #F03355;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
    gap: 1.5rem;

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

    span {
        input {
            margin-left: -1.5rem;
            margin-top: .8rem;
            height: 1rem;
            width: 10rem;
            color: #F03355;
            font-size: 16px;
            line-height: 20px;
            
            border-radius: 4px;
            padding: 8px 16px;
            border: 2px solid transparent;
            background: rgb(251, 251, 251);
            transition: all 0.1s ease 0s;
                :focus{
                    border: 2px solid rgb(124, 138, 255);
                }
                :hover {
                    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
                }   
            }
        }
`;