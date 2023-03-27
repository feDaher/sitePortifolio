import styled from "styled-components"
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandTypescript } from 'react-icons/tb'
import { GrNode } from 'react-icons/gr'
import { SiStyledcomponents } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

const StyledContainer = styled.div`
  height: 100vh;
  background: url('resume.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`
const StyledPositionTitle = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
`
const StyledH1 = styled.h1`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 2px solid #4D82ED;
`
const StyledContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  gap: 30px;
`
const StyledDivIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const StyledDescription = styled.span`
  font-size: 15px;
  box-shadow: 1px 1px 1px 1px white;
  padding: 10px 20px;
  transition: 0.5s ease-in-out;
  border-radius: 5px;
  cursor: pointer;
  :hover{
    background-color: white;
    color: #4D82ED;
    font-weight: bold;
  }
`
const Resume = () => {
  return (
    <StyledContainer id="resume">
      <StyledPositionTitle>
        <StyledContainerIcon>
         <StyledH1>Stack:</StyledH1>
         <StyledDivIcon>
          <IoLogoJavascript />
          <StyledDescription>- Javascript -</StyledDescription>
         </StyledDivIcon>
         <StyledDivIcon>
         <TbBrandTypescript />
          <StyledDescription>- Typescript -</StyledDescription>
         </StyledDivIcon>
         <StyledDivIcon>
         <FaReact />
          <StyledDescription>- React -</StyledDescription>
         </StyledDivIcon>
         <StyledDivIcon>
         <GrNode />
          <StyledDescription>- Node.js -</StyledDescription>
         </StyledDivIcon>
         <StyledDivIcon>
         <SiStyledcomponents />
          <StyledDescription>- Styled Components -</StyledDescription>
         </StyledDivIcon>
        </StyledContainerIcon>
        <div>
         <StyledH1>Experience:</StyledH1>
        </div>
      </StyledPositionTitle>
    </StyledContainer>
  )
}

export default Resume