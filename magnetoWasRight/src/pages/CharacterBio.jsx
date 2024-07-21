import CharacterList from "../component/CharacterList";



export default function CharacterBio() {
    return(

        <div>
            <div className="background">
                <h1>Explore these Legendary Mutants</h1>
                <p>Take a look at our most popular and powerful mutants of X-Men history.</p>
            </div>  
            <div style={{marginLeft:'15%', marginTop:"5%"}}>
            <CharacterList/>
            </div>
        </div>
    )

}