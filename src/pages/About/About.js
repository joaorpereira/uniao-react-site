import React from 'react'
import { Section, Subscribe, AboutSection } from "../../components"
import { aboutObj, testimonyObj} from './aboutData'

function About() {
    return (
        <div className="page">  
            <Section {...aboutObj}/>
            <AboutSection {... testimonyObj}/>
            <Subscribe/>
        </div>
    )
}

export default About;