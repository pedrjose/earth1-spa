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
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    
    img {
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
    gap: .7rem;
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    img {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        border-radius: 15px;
        height: 5rem;
        width: 10rem;
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

export const YellowCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    height: 5rem;
    width: 25rem;
    gap: 1rem;
    margin-top: 1rem;
    font-family: 'Asap Condensed', sans-serif;
    background-color: #F03355;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    button {
        outline: 0;
        grid-gap: 8px;
        align-items: center;
        background-color: #F0E233;
        color: red;
        border: 1px solid red;
        border-radius: 4px;
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        font-size: 16px;
        gap: 8px;
        justify-content: center;
        line-height: 1.5;
        overflow: hidden;
        padding: 12px 16px;
        text-decoration: none;
        text-overflow: ellipsis;
        transition: all .14s ease-out;
        height: 2rem;
        white-space: nowrap;
        :hover {
                box-shadow: 4px 4px 0 red;
                transform: translate(-4px,-4px);
            }
        :focus-visible{
                outline-offset: 1px;
            }
                
    }

    :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    }
`;