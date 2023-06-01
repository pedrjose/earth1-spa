import styled from 'styled-components'

export const CenterItems = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    p {
        font-family: 'Asap Condensed', sans-serif;
        font-weight: normal;
        color: black;
    }

    span {
        display: flex;
        justify-content: flex-start;
        margin-left: 5rem;
        margin-right: 3rem;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        
        p {
            color: white;
        }
    }
`;

