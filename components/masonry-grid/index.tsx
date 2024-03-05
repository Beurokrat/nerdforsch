import React, { useState } from 'react'
import List from './list'
import Modal from './modal'


function MasonryGrid() {
    const [selected, setSelected] = useState(null)

    return (
        <section className='my-[100px]'>
            <List setSelected = {setSelected} />
            <Modal selected={selected} setSelected={setSelected}/>
        </section>
    )
}

export default MasonryGrid
