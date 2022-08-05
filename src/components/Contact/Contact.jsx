import React from 'react'
import { 
    Container,
    Wrapper,
    ContactHead,
    ContactContainer,
    Contacts,
    TextIcon,
    Icon,
    Text,
    DescContainer,
    Description,
    Day,
    Link
} from './Element'
import {GoLocation} from 'react-icons/go'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {

  return (
    <Container id='contact'>
        <Wrapper>
            <ContactHead>ติดต่อเรา</ContactHead>
            <ContactContainer>
                <Contacts>
                    <TextIcon>
                        <Icon><GoLocation/></Icon>
                        <Text>ที่อยู่</Text>
                    </TextIcon>
                    <DescContainer>
                        <Description>206 ถนน นนทบุรี บางกระสอ อำเภอเมืองนนทบุรี นนทบุรี 11000</Description>
                        <Description>(ตรงข้ามโรงพยาบาลพระนั่งเกล้า) </Description>
                        <Link href='https://maps.app.goo.gl/iekQM5hDsruXyUJV7' target='_blank'>ดูแผนที่</Link>
                    </DescContainer>
                </Contacts>
                <Contacts>
                    <Icon><BiTimeFive/></Icon>
                    <Text>เวลาทำการ</Text>
                    <DescContainer>
                        <Description><Day>วันจันทร์</Day> 10:00-18:30</Description>
                        <Description><Day>วันอังคาร</Day> 10:00-18:30</Description>
                        <Description><Day>วันพุธ</Day> 10:00-18:30</Description>
                        <Description><Day>วันพฤหัสบดี</Day> 10:00-18:30</Description>
                        <Description><Day>วันศุกร์</Day> 10:00-18:30</Description>
                        <Description><Day>วันเสาร์</Day> 10:00-18:30</Description>
                        <Description><Day>วันอาทิตย์</Day> หยุดทำการ</Description>
                    </DescContainer>
                </Contacts>
                <Contacts>
                    <Icon><AiOutlinePhone/></Icon>
                    <Text>เบอร์โทร</Text>
                    <DescContainer>
                        <Description>02-969-0671</Description>
                        <Description>083-263-5597 (ช่างอ้วน) </Description>
                        <Description>096-879-4835 (คุณโอ๋)</Description>
                    </DescContainer>
                </Contacts>
            </ContactContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact