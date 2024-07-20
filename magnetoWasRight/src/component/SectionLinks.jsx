import { Link } from "react-router-dom";
import blogImage from "../assets/images/blogHome.png";
import itemImage from "../assets/images/itemHome.png";
import charImage from "../assets/images/character.png";
import Image from 'react-bootstrap/Image';


function SectionLinks() {



    return(
        <div >
                <div>
                    <h2>Checkout our Content!</h2>
                </div>
                <div className=" section-index row ">
                <div className="col-lg-4">
                    <Link className="image-link" to="/blog">
                    <Image src= {blogImage} fluid  alt="blog home" className="blogIimage feature"/>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link to="/shop" className="image-link">
                    <Image src= {itemImage} fluid  alt="item home"  className="itemImage feature"/>
                    </Link> 
                </div>
                <div className="col-lg-4">
                    <Link className="image-link" to="/character-bio">
                    <Image src= {charImage} fluid  alt="character" className="character feature"/>
                    </Link>    
                </div>
                </div>
        </div>
    )
}

export default SectionLinks