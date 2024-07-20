import Image from 'react-bootstrap/Image'
import IndexImage from '../assets/images/x-menProfile.jpg'

function HomeImage(){
    return(
        <div>
            <Image fluid src={IndexImage} alt="krakoa home" className="home-image"/>
        </div>
    )
}

export default HomeImage;