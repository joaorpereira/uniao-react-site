import React from 'react'
import { GalerySection, Subscribe } from "../../components"
import { galeryObj} from './galeryData'

function Galery() {
    return (
        <div className="page">  
            <GalerySection {...galeryObj}/>
            <Subscribe/>
        </div>
    )
}

export default Galery;