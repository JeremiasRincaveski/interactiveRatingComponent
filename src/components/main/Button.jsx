import styled from "styled-components"

const StyledButton = styled.button`
    border: none;
    background-color: ${props => props.theme.color.darkBlue};
    color: ${props => props.theme.color.lightGrey};
    border-radius: 100%;
    width: 50px;
    height: 50px;
    padding: 1rem;

    &:hover {
        cursor: pointer;
    }
`

export const Button = ({valor, onClick, value }) => {
    return (
        <StyledButton value={value} onClick={onClick}>
        {valor}
        </StyledButton>
    )
}