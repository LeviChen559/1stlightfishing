import React,{FC,memo} from 'react'
import Image from 'next/image'
import {IStyle} from '../../utility/type'
interface Props{
    src:string
}

const MasonryImage:FC<Props> = memo(( {src} ) => {
    return<>
    
    <div style={{ borderRadius: '10px', margin: '5px' }}>
        <Image src={src} style={{ width: '100%', borderRadius: '10px' }} />
    </div>
    </>
})

export default MasonryImage