import styled from "styled-components";

export const NotFoundBox = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        font-family: 'Asap Condensed', sans-serif;
    }

    h2 {
        font-family: 'Asap Condensed', sans-serif;
    }

    button {
        display: inline-block;
        outline: 0;
        text-align: center;
        cursor: pointer;
        padding: 17px 30px;
        border: 0;
        color: #fff;
        font-size: 17.5px;
        border: 2px solid transparent;
        border-color: #000;
        color: #000;
        background: transparent;
        font-weight: 800;
        line-height: 30px;
        transition: background,color .1s ease-in-out;
        :hover {
            background-color: #000;
            color: #fff;
        }       
    }

    img {
        border-radius: 15px;
        :hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }
`;