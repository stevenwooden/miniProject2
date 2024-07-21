import Image from "react-bootstrap/esm/Image"
import Button from "react-bootstrap/esm/Button"

function BlogArticle ({image, caption, link}) {
    return (
        <div className="blog">
            <Image src={image} style={{width: "100%", marginBottom:10 }} alt="X-men Adapt"/>
            <h4 className="caption">{caption}</h4>
            <Button variant="primary" size='lg' href={link} >Click Here Read More!</Button> 
        </div>
    )
}

export default BlogArticle;