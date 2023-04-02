import { StyledMain } from "./Main"
import svg from "../../../../interactive-rating-component-main/images/illustration-thank-you.svg"
import styled from "styled-components"
import { useContext } from "react"
import { MyContext } from "../../context/MyContext"

const StyledDiv = styled.div`
    
    width: 4055px;
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${props => props.theme.color.white};

    h1 {
        font-weight: 700;
        margin-bottom: 0;
    }

    p {
        font-weight: 400;
        text-align: center;
    }

    img {
        width: 60%;
    }

    span {
        margin-top: 2rem;
        background-color: ${props => props.theme.color.darkBlue};
        padding: .3rem 2rem;
        border-radius: 15px;
        color: ${props => props.theme.color.orange};
    }
`

export const ThankYou = () => {

    const { valor } = useContext(MyContext)

    return (
        <StyledDiv>
            <img src={svg} alt="maicon kruster" />
            <span>You select {valor} out of 5</span>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </StyledDiv>
    )
}