import styled from "styled-components"
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 300px;
  height: 100vh;
  background: url('home.jpg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  position: relative;
  @media(max-width: 570px) {
    padding-left: 150px;
  }
  @media(max-width: 400px) {
    padding-left: 50px;
  }
`
const StyledContainer = styled.div`
  color: white;

`
const H2 = styled.h2`
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
`
const H1 = styled.h1`
  font-size: 70px;
  font-weight: bold;
  font-family: 'Trebuchet MS', sans-serif;
`
const StyledP = styled.p`
  font-size: 20px;
  font-family: Verdana, sans-serif;
`
const StyledDivLink = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 30px;
`
const StyledLink = styled.a`
  padding: 5px 20px;
  border: 1px solid white;
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: white;
  :hover{
    background-color: #909090;
  }
`
const StyledDivIcon = styled.div`
  display: flex;
  position: absolute;
  bottom: 7%;
  font-size: 30px;
  color: white;
  gap: 30px;
`
const StyledIcon = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`

const Home = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <H2>Felipe</H2>
        <H1>Daher</H1>
        <StyledP>Web Developer</StyledP>
        <StyledDivLink>
          <StyledLink href="#resume">Resume</StyledLink>
          <StyledLink href="#portfolio">Portfolio</StyledLink>
        </StyledDivLink>
      </StyledContainer>
      <StyledDivIcon>
        <StyledIcon href="https://www.linkedin.com/in/felipe-daher/" target='_blank'><AiFillLinkedin /></StyledIcon>
        <StyledIcon href="https://www.instagram.com/daher_fe/" target='_blank'><AiOutlineInstagram /></StyledIcon>
        <StyledIcon href="https://www.facebook.com/felipe.daher.9/" target='_blank'><FaFacebook /></StyledIcon>
        <StyledIcon href="https://github.com/feDaher" target='_blank'><FaGithub /></StyledIcon>
        <StyledIcon title="(33) 9 8411-6107" target='_blank'><BsWhatsapp /></StyledIcon>
      </StyledDivIcon>
    </StyledHeader>
  )
}

export default Home