import { Container,Arrow,Wrapper,Slide,ImageContainer,InfoContainer,Image, Title, Description, Button, StyledLink } from "./Sliderstyled";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import sliderItems from "../../data";
import { useState } from "react";

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0)
    const onClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex -1:2)
        }else{
            setSlideIndex(slideIndex <2 ? slideIndex +1:0)
        }
    }
    return ( 
       <Container>
           <Arrow direction="left" onClick={()=>onClick("left")}>
               <ArrowLeftOutlinedIcon />
           </Arrow>
           <Arrow direction="right" onClick={()=>onClick("right")}>
               <ArrowRightOutlinedIcon />
           </Arrow>
           <Wrapper slideIndex={slideIndex}>
             {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                  <ImageContainer>
                       <Image src={item.img}/>
                  </ImageContainer>
                  <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                        <Button>
                          <StyledLink to="/products/1">
                               SHOP NOW
                         </StyledLink>
                        </Button>
                  </InfoContainer>
             </Slide>
             ))}
              
           </Wrapper>
       </Container>
     );
}
 
export default Slider;