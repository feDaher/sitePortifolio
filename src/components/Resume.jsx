import styled from "styled-components"
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandTypescript } from 'react-icons/tb'
import { GrNode } from 'react-icons/gr'
import { SiStyledcomponents } from 'react-icons/si'

const StyledContainer = styled.div`
  height: 100vh;
  background: url('resume.jpg');
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  background-size: 400px;
  color: white;
`
const StyledPositionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
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
  font-size: 30px;
  gap: 30px;
`

const Resume = () => {
  return (
    <StyledContainer id="resume">
      <StyledPositionTitle>
        <StyledContainerIcon>
         <StyledH1>Stack:</StyledH1>
         <IoLogoJavascript />
         <TbBrandTypescript />
         <GrNode />
         <SiStyledcomponents />
        </StyledContainerIcon>
        <div>
         <StyledH1>Experience:</StyledH1>
        </div>
        <div>
         <StyledH1>Education:</StyledH1>
        </div>
      </StyledPositionTitle>
    </StyledContainer>
  )
}

export default Resume