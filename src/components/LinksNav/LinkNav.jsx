import React from 'react'
import { 
  Container, 
  Wrapper,
  LinksContainer,
  Links,
  Icon
} from './Element'
import {AiOutlineClose} from 'react-icons/ai'


const LinkNav = ({openMenu,handleOpen}) => {
  return (
    <Container openMenu={openMenu}>
      <Wrapper>
        <Icon onClick={handleOpen}>
          <AiOutlineClose/>
        </Icon>
        <LinksContainer>
          <Links to='about'
              onClick={handleOpen}
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true'
          >เกี่ยวกับเรา</Links>
          <Links to='service'
              onClick={handleOpen}
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true'
          >บริการ</Links>
          <Links to='contact'
              onClick={handleOpen}
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true'
          >ติดต่อเรา</Links>
        </LinksContainer>
      </Wrapper>
    </Container>
  )
}

export default LinkNav