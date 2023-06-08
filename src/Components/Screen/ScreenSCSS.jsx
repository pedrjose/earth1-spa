import styled from "styled-components";

export const CenterWarning = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Asap Condensed', sans-serif;

    span {
        justify-content: flex-start;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
        font-size: 1rem;
    }

    h3 {
        font-size: 1rem;
        font-style: italic;
    }

    img {
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
`;