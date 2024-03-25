import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import ShowReel from '../showreel'
interface Props { }

function Modal({ selected, setSelected }) {
    if (!selected) {
        return <></>
    }
    console.log(selected)
    return (
        <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll">
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[700px] mx-auto my-20 px-8 cursor-default"
            >
                <motion.div layoutId={`card-${selected.id}`}>
                    {selected.video ?
                        <div className='w-full bg-black m-auto sm:aspect-video relative'>
                        <iframe
                          src= {selected.url}
                          className='pointer-events-none absolute inset-0 h-full w-full object-cover'
                        />
                      </div>
                        :
                        <img src={selected.url} alt='gallery image' />
                    }
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    className="bg-white p-4"
                >
                    <h3 className='md:text-2xl'>{selected.title}</h3>
                    <p className='md:text-md'>{selected.description}</p>

                </motion.div>
            </div>
        </div>
    )
}

export default Modal
