
import HomeHeader from "../component/HomeHeader"
import SectionLinks from "../component/SectionLinks"
import HomeImage from "../component/HomeImage"
export default function HomePage() {
    return (

    <div>
        <HomeImage/>
        <div className="container">
            <HomeHeader/>
            <SectionLinks/>
        </div>
    </div>
    )
}