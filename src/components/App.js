// create your App component here
import React, {useState, useEffect} from "react";


function App(){
    const [randoDog, setrandoDog] = useState([])
    const [gettingDoggos, setgettingDoggos] = useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setrandoDog(data.message)
            setgettingDoggos(true)
        })
    })
    if (!gettingDoggos) return <p>Loading...</p>;

    return(
        <div>
            <img src={randoDog} alt="Cute Doggos" />
        </div>
    )
}

export default App