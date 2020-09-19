import React from 'react'
import { Hero, Section, Subscribe, Stories} from "../../components"
import {homeObjOne, aboutObj, galeryObj, gamesObj, storyObj} from './Data'

function Home() {
    return (
        <>
            <Hero {...homeObjOne}/>
            <Section {...aboutObj}/>
            <Section {...galeryObj}/>
            <Section {...gamesObj}/>
            <Stories {...storyObj}/>
            <Subscribe/>
        </>
    )
}

export default Home;
