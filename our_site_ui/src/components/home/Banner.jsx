import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import {styled} from "@mui/material";


const Image = styled ('img') ({
    width: '100%',
    height: 280,

})



const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
<Carousel responsive={responsive}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</Carousel>;



const Banner = () => {

    return (

        <Carousel   responsive ={responsive}
                    swipeable={false}
                    draggable={false}      
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    showDots={false}
                    slidesToSlide={1}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px" 
        
        
        >
            {
                // map karke ek ek object ko nikal rahe hai 
                bannerData.map(data => (

                    <Image src={data.url} alt="nav" />

                ))


            }
        </Carousel >
    )

}
export default Banner;