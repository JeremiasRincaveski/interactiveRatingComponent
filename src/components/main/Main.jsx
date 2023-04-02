import styled from "styled-components"
import { Button } from "./Button"
import { MyContext } from "../../context/MyContext"
import { useContext, useState } from "react"
import { ThankYou } from "./ThankYou"

const svg = <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>

export const StyledMain = styled.div`
    width: 405px;
    height: auto;
    background: hsl(215, 27%, 12%);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: calc((405px / 2) * -1);
    margin-top: calc((415px / 2) * -1);
    border-radius: 35px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color.white};

    h1 {
        font-weight: 700;
        margin-bottom: 0;
    }

    p {
        font-weight: 400;
    }
`

const StyledDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledSubmitted = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    padding: .7rem;
    border-radius: 30px;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.orange};
`

export const Main = () => {

    const { handleValor, valor } = useContext(MyContext)
    const validaValor = (evento) => {
        if (valor != 0) {
            evento.target.parentNode.style.display = 'none'
        }
    }

    const renderiza = () => {
        const botao = []
        for (let index = 1; index <= 5; index++) {
            botao.push(<Button onClick={handleValor} value={index} valor={index} />)
        }
        return botao
    }

    return (
            <StyledMain>
                <Button valor={svg} />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!</p>
                <StyledDiv>
                    {renderiza()}
                </StyledDiv>
                <StyledSubmitted onClick={validaValor}>
                    SUBMIT
                </StyledSubmitted>
            </StyledMain>
    )
}