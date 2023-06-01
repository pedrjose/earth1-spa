import styled from 'styled-components'

export const MoveToTheCenter = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 100vw;
    height: 100vh;
    gap: 1rem;
    padding: 7rem;
    
    img {
        max-width: 43.75rem;
        max-height: 24.6rem;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            
        :hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
    }
    

    h2 {
        font-family: 'Asap Condensed', sans-serif;
        font-weight: bolder;
    }

    p {
        font-family: 'Asap Condensed', sans-serif;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;

        span {
            gap: .5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            background-color: white;
            border-radius: 20px;
            width: 13rem;
            height: 4rem;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

            :hover {
                box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
            }
        }

        img {
            height: 3rem;
            width: 50px;
            border-radius: 50%;
        }

        button {
            background: none;
            border: none;
            transition: all 0.5s;
            cursor: pointer;

            :hover {
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
            }
        }

        p {
            font-size: 1.3rem;
            font-family: 'Roboto', sans-serif;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    div {
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            
            gap: 1rem;

            input {
                ::placeholder {
                    color: black;
                }

                padding: 6px 12px;
                background: #3355F0;
                border: 1px solid rgb(60, 63, 68);
                border-radius: 4px;
                font-size: 13px;
                color: black;
                height: 1rem;
                width: 34.5rem;
                appearance: none;
                transition: border 0.15s ease 0s;
                margin-bottom: 1.5rem;

                :focus{
                    outline: none;
                    box-shadow: none;
                    border-color: rgb(100, 153, 255);
                }
        
                :hover {
                    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
                }
            }

            button {
                display: inline-block;
                outline: 0;
                border: none;
                cursor: pointer;
                height: 32px;
                padding: 0px 16px;
                border-radius: 50px;
                background-color: #2222220d;
                color: #222;
                font-size: 12px;
                font-weight: 500;
                margin-bottom: 1.5rem;
        
                :hover {
                    background-color: #33F03C;
                    }
                
            }
        }
    }
`;