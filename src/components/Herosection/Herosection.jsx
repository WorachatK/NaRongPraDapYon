import React, { useCallback, useEffect, useState } from 'react'
import { 
    Container,
    Wrapper,
    Arrow,
    ImageContainer,
    Image
} from './Element'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';
import { data } from './data';

const Herosection = () => {

    const [slideIndex,setSlideInddex] = useState(0)
    const handleClick = useCallback((direction) =>{
        if(direction==="left"){
            setSlideInddex(slideIndex > 0 ? slideIndex-1 : 3)
        } else {
            setSlideInddex(slideIndex < 3 ? slideIndex +1 : 0)
        }
    },[slideIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            handleClick("right")
        }, 5000);
        return () => clearInterval(interval);
      }, [handleClick]);

  return (
    <Container>
        <Wrapper>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <AiOutlineArrowLeft/>
            </Arrow>
            
            <ImageContainer slideIndex={slideIndex}>
                {data.map(item=>(
                    <Image src={item.image} key={item.image}/>
                ))}
                
            </ImageContainer>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <AiOutlineArrowRight/>
            </Arrow>
        </Wrapper>
    </Container>
  )
}

export default Herosection