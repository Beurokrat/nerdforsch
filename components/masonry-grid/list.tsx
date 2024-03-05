import React from 'react'
import { items } from './data'
import Card from './card'

interface Props { }

function List({ setSelected }) {

    return (
        <div className="p-4">
            <div className="md:columns-3 sm:columns-2  gap-4">
                {items.map(item => <Card key={item.id} setSelected={setSelected} item={item}/>)}
            </div>
        </div>
    )
}

export default List
