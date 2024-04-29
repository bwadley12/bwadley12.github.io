import './ThreeDPrinting.css';
import NavBar from '../../components/NavBar/NavBar';
import MiddleFingerPot from "../../assets/middle-finger-pot.jpg";
import RightArrow from "../../assets/right-arrow.svg";

export default function Home() {
  document.title = "3D Printing";

  const printCategories = [
    {
      title: "Plant Accessories",
      image: MiddleFingerPot,
      link: "#/3dprinting/Plant-Accessories"
    },
    {
      title: "Home Decor",
      image: MiddleFingerPot,
      link: "#/3dprinting/Home-Decor"
    }
  ]

  const printCategoryCards = printCategories.map(item =>
    <ThreeDPrintCategoryCard key= {item.title} item={item}/>
  )


  return (
    <>
      <NavBar />
      <div className='standard-container'>
        {printCategoryCards}
      </div>
    </>
  )
}





function ThreeDPrintCategoryCard({item}) {

  return (
    <a className='three-d-print-category-card' href={item.link}>
      <img src={item.image}></img>
      <div className='shadow'></div>
      
      <div className='title'> {item.title} </div>
      <div className='pointer-box'>
        <div className='pointer-slide-out'>
          <img src={RightArrow}></img>
        </div>
      </div>
    </a>
  )

}