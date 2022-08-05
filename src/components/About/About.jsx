import React from 'react'
import { 
  Container,
  Wrapper,
  TextContainer,
  HeadText,
  Description,
  Button
} from './Element'

const About = () => {
  return (
    <Container id='about'>
      <Wrapper>
        <TextContainer>
          <HeadText>เกี่ยวกับเรา</HeadText>
          <Description>เราเป็นผู้ให้บริการ รับติดตั้ง-ซ่อม แอร์รถยนต์ ไดนาโม หม้อน้ำ ท่อไอเสีย แบตเตอรี่ ให้กับรถยนต์ทุกรุ่น ทุกยี่ห้อ </Description>
        </TextContainer>
        <Button to='contact'
          smooth={true} 
          duration={500} 
          spy={true}
          exact='true'
        >ใช้บริการ</Button>
      </Wrapper>
    </Container>
  )
}

export default About