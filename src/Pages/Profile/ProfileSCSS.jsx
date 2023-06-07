import styled from "styled-components";

export const ProfileBox = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 7rem;
    max-width: 100vw;
    height: 100vh;
    gap: 1rem;

    img {
        max-width: 43.75rem;
        max-height: 24.6rem;
        border-radius: 15px;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        
        :hover {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }
    }

    div {
        span {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: -10rem;
        gap: 1rem;

        img {
            width: 200px;
            height: 200px; 
            border-radius: 50%; 
            object-fit: cover;
            box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
        }
    }

    h1 {
        font-family: 'Asap Condensed', sans-serif;
        text-shadow: 2px 2px 4px black; 
        color: white;
        border-radius: 5px;
    }

    p {
        font-family: 'Asap Condensed', sans-serif;
    }

    section {
        button {
            display: inline-block;
            outline: 0;
            cursor: pointer;
            border-radius: 6px;
            border: 2px solid #ff4742;
            color: #ff4742;
            background: 0 0;
            padding: 8px;
            box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
            font-weight: 800;
            font-size: 16px;
            height: 42px;
            margin-bottom: 1rem;

        :hover{
            background-color: #ff4742;
            color: #fff;
            }
        }
    }

`;