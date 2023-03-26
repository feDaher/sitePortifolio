import styled from "styled-components"
import { GoDeviceMobile } from 'react-icons/go'

const StyledNav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  position: absolute;
  background: transparent;
`
const StyledUlist = styled.ul`
  display: flex;
  padding-left: 50px;
  line-height: 60px;
  gap: 50px;
`
const StyledList = styled.li`
  text-decoration: none;
  list-style: none;
  color: white;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover{
    color: #4D82ED;
  }
`
const StyledDivMobile = styled.div`
  color: white;
  margin-left: auto;
  margin-right: 30px;
  line-height: 60px;
  @media(max-width: 500px) {
    display: none;
  }
`
const StyledIcon = styled(GoDeviceMobile)`
  font-size: 20px;
  margin-right: 10px;
`
const Nav = () => {
  return (
    <StyledNav>
      <StyledUlist>
        <StyledList><a>Home</a></StyledList>
        <StyledList><a>About</a></StyledList>
        <StyledList><a>Portfolio</a></StyledList>
      </StyledUlist>
      <StyledDivMobile>
          <StyledIcon />
          <span>(33) 9 8411-6107</span>
        </StyledDivMobile>
    </StyledNav>
  )
}

export default Nav