import styled from 'styled-components'

const StyledDiv = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.color.veryDarkBlue};
    width: 100vw;
    height: 100vh;
`

export const Background = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}