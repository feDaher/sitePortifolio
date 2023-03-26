import styled from "styled-components"
import { GoDeviceMobile } from 'react-icons/go'
import { useState, useEffect } from "react"

const StyledNav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  position: absolute;
  background: transparent;
  position: fixed;
  transition: 1s ease-out;
  &.scroll{
    background-color: #212A3B;
    opacity: 0.8;
  }
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
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  transition: 0.5s ease-in-out;
  :hover{
    color: #4D82ED;
  }
`

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <div id="home"></div>
    <StyledNav className={scroll ? 'scroll' : ''}>
      <StyledUlist>
        <StyledList><StyledLink href="#home">Home</StyledLink></StyledList>
        <StyledList><StyledLink href="#about">About</StyledLink></StyledList>
        <StyledList><StyledLink href="#portfolio">Portfolio</StyledLink></StyledList>
      </StyledUlist>
      <StyledDivMobile>
          <StyledIcon />
          <span>(33) 9 8411-6107</span>
        </StyledDivMobile>
    </StyledNav>
    </>
  )
}

export default Nav