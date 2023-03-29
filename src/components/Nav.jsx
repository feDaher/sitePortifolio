import styled from "styled-components"
import { GoDeviceMobile } from 'react-icons/go'
import { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"

const StyledNav = styled.nav`
  height: 50px;
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
  align-items: center;
  padding-left: 50px;
  line-height: 50px;
  gap: 50px;
  color: white;
`
const StyledList = styled.li`
  text-decoration: none;
  list-style: none;
  color: white;
  cursor: pointer;
`
const StyledDivMobile = styled.div`
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  transition: 0.7s ease-in-out;
  :hover{
    color: #4D82ED;
  }
  @media(max-width: 600px) {
    display: none;
  }
`
const StyledIcon = styled(GoDeviceMobile)`
  font-size: 20px;
  margin-right: 10px;
  color: white;
  transition: 0.7s ease-in-out;
  :hover{
    color: #4D82ED;
  }
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
      <Fade top>
        <StyledUlist>
          <StyledList><StyledLink href="#home">Home</StyledLink></StyledList>
          <StyledList><StyledLink href="#about">About</StyledLink></StyledList>
          <StyledList><StyledLink href="#resume">Resume</StyledLink></StyledList>
          <StyledList><StyledLink href="#portfolio">Portfolio</StyledLink></StyledList>
          <StyledDivMobile>
            <StyledIcon />
            <span>(33) 9 8411-6107</span>
          </StyledDivMobile>
        </StyledUlist>
      </Fade>
    </StyledNav>
    </>
  )
}

export default Nav