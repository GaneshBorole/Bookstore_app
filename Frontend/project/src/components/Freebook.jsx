import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from '../../public/list.json'
import axios from 'axios';
import Cards from './Cards';
import { useEffect ,useState} from 'react';

function Freebook() {
  const [book, setBooks] = React.useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
       const res= await axios.get("http://localhost:3000/book");
      
       const data=res.data.filter((data)=>data.category ==="Free");
       console.log(data);
       setBooks(data);
       
      } catch (error) {
        console.log(error);
        
        
      }
    }
    getBook();
  },[]);
  // const filterData= list.filter((data)=>data.category ==="Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div>
      <h1 className='text-xl p-2 font-bold '>Free offred courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus voluptatum corporis facilis tempora illum facere magnam velit atque. </p>
      </div>
    
    <div>
    <Slider {...settings}>
       {book.map((item)=>(
        <Cards item={item}key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
