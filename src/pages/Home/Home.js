import React from 'react'
import { Hero } from "../../components"
import {homeObjOne} from './Data'

function Home() {
    return (
        <>
            <Hero {...homeObjOne}/>
        </>
    )
}

export default Home;
