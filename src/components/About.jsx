import styled from "styled-components"
import { Zoom } from "react-reveal"

const StyledContainer = styled.div`
  background-color: #02050D;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 300px;
  height: 100vh;
  position: relative;
  @media(max-width: 1200px) {
    padding-left: 200px;
  }
  @media(max-width: 1000px) {
    padding-left: 50px;
  }
`
const Title = styled.span`
  font-size: 50px;
  font-weight: bold;
  font-family: 'Trebuchet MS', sans-serif;
  color: white;
  border-bottom: 2px solid #4D82ED;
`
const StyledEmail = styled.p`
  color: white;
  position: absolute;
  margin-top: 20px;
`
const StyledAbout = styled.p`
  width: 500px;
  text-align: justify;
  text-align-last: left;
  color: white;
  position: absolute;
  margin-top: 100px;
  @media(max-width: 580px) {
    font-size: 15px;
    width: 350px;
  }
`
const H4 = styled.h4`
  display: flex;
  color: white;
  position: absolute;
  bottom: 9%;
  border-bottom: 2px solid #4D82ED;
  padding-bottom: 3px;
`
const StyledImg = styled.img`
  display: flex;
  width: 250px;
  float: right;
  position: relative;
  border-radius: 50%;
  margin-right: 15%;
  margin-top: 100px;
  @media(max-width: 1200px) {
    margin-right: 10%;
  }
  @media(max-width: 1000px) {
    margin-right: 5%;
  }
  @media(max-width: 865px) {
    opacity: 0;
  }
`

const About = () => {
  return (
    <StyledContainer id="about">
      <Zoom top>
          <Title>ABOUT</Title>
          <StyledEmail>felipe_daher29@hotmail.com</StyledEmail>
      </Zoom>
      <div>
        <StyledAbout>Engenheiro de Software Fullstack - Desenvolvedor React: Front-end e Back-end. (JS e TS)
        Comecei na area de Engenharia de Produção, porém sempre fui um entusiasta da programação, no que diz respeito aos bastidores e as formas de como as aplicações web e de jogos eram desenvolvidas. Sou formado também em TI, dou aulas em cursos técnico de informática e já desenvolvi algumas aplicações para melhorar meu dia a dia como profissioanal, mas em meados de 2020 comecei a pesquisar e estudar mais afundo sobre Desenvolvimento Web, apaixonei pelo javascript e o famoso React, suas tecnologias atauis, e suas bibliotecas, uma forma otimizada, eficaz e eficiente de desenvolver aplicações, tanto front, como backend. E continuo aprendendo e em constante desenvolvimento de projetos FullStack com: Javascript, ReactJS, NodeJS, Express, MongooDB, etc.</StyledAbout>
      </div>
      <div>
        <StyledImg src="fotoBnW.jpg"/>
      </div>
      <H4>Minas Gerais, Brasil</H4>

    </StyledContainer>
  )
}

export default About