import "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import '../styles/header.css'

const People = () => {
    //Aqui va el array de personasgit 
    return (
        <> 
        //Aqui va el bucle .map para pintar las personas
        <li key={People.id}><Link to={`/people`}></Link></li>
        </>
    )
}   

export default People