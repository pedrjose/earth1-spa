import styled from "styled-components";

export const CommentStyle = styled.article`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #F0E233;
    width: 43rem;
    height: 4.5rem;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
    h4 {
        font-size: 1rem;
    }
    
    span {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: .2rem;
    }

    img {
        margin-left: 1rem;
        height: 3rem;
        width: 50px;
        border-radius: 50%;
        transition: all 0.5s;
        cursor: pointer;

        :hover {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }

    :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    }
`;