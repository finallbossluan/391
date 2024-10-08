import React from 'react'
import MainContent from './home/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSwiper from './home/ImageSwiper' ;
// import ProductList from './home/ProductList';
// import Commercial from './home/Commercial'
// import Uudai from './home/Uudai';
import CategoryList from '../components/CategoryList'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
const Home = () => {
  return (
    <div className="container"> 
      {/* <ImageSwiper/>
    <MainContent />
  <ProductList/>
  <Commercial/>
  <Uudai/> */}

    <CategoryList/>
    <ImageSwiper/>
    <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    <MainContent />
  </div>
  )
}

export default Home