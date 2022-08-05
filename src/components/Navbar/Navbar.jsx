import React from 'react'
import { 
    Container,
    Wrapper,
    LogoContainer,
    Logo,
    LinksContainer,
    Links,
    LinkIcon
} from './Element'
import {BsList} from 'react-icons/bs'


const Navbar = ({handleOpen,toggleHome}) => {

  return (
    <Container>
        <Wrapper>
            <LogoContainer>
                <Logo onClick={toggleHome}>ณรงค์ประดับยนต์</Logo>
            </LogoContainer>

            <LinksContainer>
                <Links onClick={toggleHome} to=''>หน้าหลัก</Links>
                <Links to='about'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                >เกี่ยวกับเรา</Links>
                <Links to='service'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                >บริการ</Links>
                <Links to='contact'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                >ติดต่อเรา</Links>
            </LinksContainer>

            <LinkIcon>
                <BsList onClick={handleOpen}/>
            </LinkIcon>
        </Wrapper>
    </Container>
  )
}

export default Navbar