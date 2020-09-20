import React from 'react'
import { GalerySection, Subscribe } from "../../components"
import { galeryObj} from './Data'

function Galery() {
    return (
        <>  
            <GalerySection {...galeryObj}/>
            <Subscribe/>
        </>
    )
}

export default Galery;