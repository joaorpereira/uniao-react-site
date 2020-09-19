import React from 'react'
import { Section, Subscribe, Depoiments } from "../../components"
import { aboutObj, testimonyObj} from './Data'

function About() {
    return (
        <>  
            <Section {...aboutObj}/>
            <Depoiments {... testimonyObj}/>
            <Subscribe/>
        </>
    )
}

export default About;