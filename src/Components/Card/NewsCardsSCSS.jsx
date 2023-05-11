import styled from 'styled-components'

export const Trending = styled.div`
    background-color: #33F03C;
    height: 15rem;
    width: 47rem;
    border-radius: 15px;
    border-style: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 8.5rem;
    
    img {
        border-radius: 15px;
        height: 10rem;
        margin-left: 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
        gap: 1rem;

        h1 {
            font-size: 20px;
            font-family: 'Asap Condensed', sans-serif;
            font-weight: bolder;
        }

        p {
            font-size: 14.5px;
            font-family: 'Asap Condensed', sans-serif;
            font-weight: normal;
        }
    }

    :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const ToCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BlueCard = styled.div`
    background-color: #3355F0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 10rem;
    width: 11rem;
    border-style: none;
    border-radius: 15px;
    color: white;
    gap: 1rem;
    transition: all 0.5s;
    cursor: pointer;

    img {
        border-radius: 15px;
        height: 3rem;
    }

    h2 {
        font-size: 15px;
        font-family: 'Asap Condensed', sans-serif;
        font-weight: bolder;
    }

    p {
        font-size: 10px;
        font-family: 'Asap Condensed', sans-serif;
        font-weight: normal;
    }

    :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const BlueNewsBox = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
`;

export const LoadButtonNews = styled.button`
    padding: 0.4rem;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.5s;
    cursor: pointer;
    margin-bottom: 2rem;

        :hover {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
`;