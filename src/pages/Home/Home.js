import React from 'react'
import { Hero, Section } from "../../components"
import {homeObjOne, aboutObj, galeryObj, gamesObj} from './Data'

function Home() {
    return (
        <>
            <Hero {...homeObjOne}/>
            <Section {...aboutObj}/>
            <Section {...galeryObj}/>
            <Section {...gamesObj}/>
        </>
    )
}

export default Home;
