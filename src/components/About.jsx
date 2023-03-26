import styled from "styled-components"

const StyledContainer = styled.div`
  background-color: #02050D;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 300px;
  height: 100vh;
  position: relative;
`
const Title = styled.span`
  font-size: 50px;
  font-weight: bold;
  font-family: 'Trebuchet MS', sans-serif;
  color: white;
  position: absolute;
  top: 10%;
  border-bottom: 1px solid #4D82ED;
`
const StyledEmail = styled.p`
  color: white;
  position: absolute;
  top: 22%;
`
const StyledAbout = styled.p`
  width: 500px;
  text-align: justify;
  text-align-last: left;
  color: white;
`
const About = () => {
  return (
    <StyledContainer id="about">
      <Title>ABOUT</Title>
      <StyledEmail>felipe_daher29@hotmail.com</StyledEmail>
      <div>
        <StyledAbout>Engenheiro de Software Fullstack - Desenvolvedor React: Front-end e Back-end. (JS e TS)
        Comecei na area de Engenharia de Produção, porém sempre fui um entusiasta da programação, no que diz respeito aos bastidores e as formas de como as aplicações web e de jogos eram desenvolvidas. Sou formado também em TI, dou aulas em cursos técnico de informática e já desenvolvi algumas aplicações para melhorar meu dia a dia como profissioanal, mas em meados de 2020 comecei a pesquisar e estudar mais afundo sobre Desenvolvimento Web, apaixonei pelo javascript e o famoso React, suas tecnologias atauis, e suas bibliotecas, uma forma otimizada, eficaz e eficiente de desenvolver aplicações, tanto front, como backend. E continuo aprendendo e em constante desenvolvimento de projetos FullStack com: Javascript, ReactJS, NodeJS, Express, MongooDB, etc.</StyledAbout>
      </div>
    </StyledContainer>
  )
}

export default About