import React from 'react'
import { 
    Container,
    Wrapper,
    HeadContainer,
    ServicesContainer,
    Service,
    Image,
    TextContainer,
    HeadText,
    Description
} from './Element'
import { data } from './data'

const MyService = () => {
  return (
    <Container id='service'>
        <Wrapper>
            <HeadContainer>บริการของเรา</HeadContainer>
            <ServicesContainer>
              {data.map(item =>(
              <Service key={item.head}>
                <Image src={item.image}/>
                <TextContainer>
                  <HeadText>{item.head}</HeadText>
                  <Description>{item.text}</Description>
                </TextContainer>
              </Service>
              )) }
            </ServicesContainer>
        </Wrapper>
    </Container>
  )
}

export default MyService