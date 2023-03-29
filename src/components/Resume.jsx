import styled from "styled-components"
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandTypescript } from 'react-icons/tb'
import { GrNode } from 'react-icons/gr'
import { SiStyledcomponents, SiMongodb, SiPostgresql } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import Zoom from 'react-reveal/Zoom'


const StyledContainer = styled.div`
  min-height: 50vh;
  background: url('resume.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding-bottom: 10px;
`
const StyledPositionTitle = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
`
const StyledH1 = styled.h1`
  display: flex;
  color: white;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 2px solid #4D82ED;
`
const StyledContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #4D82ED;
  flex-wrap: wrap;
`
const StyledDivIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  gap: 15px;
  margin: 0 20px;
`
const StyledDescription = styled.span`
  font-size: 12px;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  color: #4D82ED;
  font-weight: bold;
  transition: 0.5s ease-in-out;
  :hover{
    background-color: #4D82ED;
    color: white;
  }
`
const TestDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
`
const Resume = () => {

  return (
    <StyledContainer id="resume">
      <StyledPositionTitle>
        <StyledContainerIcon>
          <Zoom botton>
            <StyledH1>Stack:</StyledH1>
           <TestDiv>
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
            <AiOutlineHtml5 />
              <StyledDescription>- HTML -</StyledDescription>
            </StyledDivIcon>
            <StyledDivIcon>
            <DiCss3 />
              <StyledDescription>- CSS -</StyledDescription>
            </StyledDivIcon>
            <StyledDivIcon>
            <GrNode />
              <StyledDescription>- Node.js -</StyledDescription>
            </StyledDivIcon>
            <StyledDivIcon>
            <SiStyledcomponents />
              <StyledDescription>- Styled Components -</StyledDescription>
            </StyledDivIcon>
            <StyledDivIcon>
            <SiMongodb />
              <StyledDescription>- No-SQL -</StyledDescription>
            </StyledDivIcon>
            <StyledDivIcon>
            <SiPostgresql />
              <StyledDescription>- SQL -</StyledDescription>
            </StyledDivIcon>
            </TestDiv>
          </Zoom>
        </StyledContainerIcon>
        <div>
         <StyledH1>Experience:</StyledH1>
        </div>
      </StyledPositionTitle>
    </StyledContainer>
  )
}

export default Resume