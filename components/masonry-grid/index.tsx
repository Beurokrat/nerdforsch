import React, { useState } from 'react'
import List from './list'
import Modal from './modal'


function MasonryGrid() {
    const [selected, setSelected] = useState(null)

    return (
        <>
            <List setSelected = {setSelected} />
            <Modal selected={selected} setSelected={setSelected}/>
        </>
    )
}

export default MasonryGrid
