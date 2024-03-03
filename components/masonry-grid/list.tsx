import React from 'react'
import { items } from './data'
import Card from './card'

interface Props { }

function List({ setSelected }) {

    return (
        <div className="p-4">
            <h1 className="text-center font-bold text-4xl mb-0">
                gallery
            </h1>
            <div className="md:columns-3 sm:columns-2  gap-4">
                {items.map(item => <Card key={item.id} setSelected={setSelected} item={item}/>)}
            </div>
        </div>
    )
}

export default List
