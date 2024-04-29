import './ThreeDPrinting.css';
import NavBar from '../../components/NavBar/NavBar';
import MiddleFingerPot from "../../assets/middle-finger-pot.jpg";
import RightArrow from "../../assets/right-arrow.svg";

export default function Home() {
  document.title = "3D Printing";

  const printCategories = [
    {
      title: "Plant Accessories",
      // image: 
    }
  ]


  return (
    <>
      <NavBar />
      <div className='standard-container'>
        <ThreeDPrintCategoryCard />
        <ThreeDPrintCategoryCard />     
      </div>
    </>
  )
}





function ThreeDPrintCategoryCard() {

  return (
    <a className='three-d-print-category-card' href='#/3dprinting/Plant-Accessories'>
      <img src={MiddleFingerPot}></img>
      <div className='shadow'></div>
      
      <div className='title'> Plant Accessories </div>
      <div className='pointer-box'>
        <div className='pointer-slide-out'>
          <img src={RightArrow}></img>
        </div>
      </div>
    </a>
  )

}