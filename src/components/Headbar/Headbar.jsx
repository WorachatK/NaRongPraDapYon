import React from 'react'
import { 
    Container,
    Wrapper,
    OpenContainer,
    PhoneContainer,
} from './Element'

const Headbar = () => {
  return (
    <Container>
        <Wrapper>
            <OpenContainer>เวลาทำการ จันทร์-เสาร์ 10.00-18.30 น.</OpenContainer>
            <PhoneContainer>ติดต่อ : 083-263-5597 (ช่างอ้วน) , 096-879-4835 (คุณโอ๋)</PhoneContainer>
        </Wrapper>
    </Container>
  )
}

export default Headbar