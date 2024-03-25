    import React from 'react'
    import { motion } from 'framer-motion'
    import ShowReel from '../showreel'
    interface Props { }

    export function Card({ setSelected, item }) {

        return (
            <div className="inline-block w-full mb-4">
                <motion.div
                    whileHover={{
                        scale: 1.025,
                        transition: {
                            duration: 0.2
                        },
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    onClick={() => setSelected(item)}
                    layoutId={`card-${item.id}`}

                    className="w-full bg-base-100 shadow-xl image-full cursor-pointer"
                >
                    {item.video ?
                        <div className='w-full bg-black m-auto sm:aspect-video relative'>
                        <iframe
                          src= {item.url}
                          className='pointer-events-none absolute inset-0 h-full w-full object-cover'
                        />
                      </div>
                        :
                        <img src={item.url} />
                    }
                </motion.div>

                {/*  update below code */}
                {/* <div className="badge text-xl flex flex-wrap m-2">
                    Cpation goes here {item.title}
                </div> */}
            </div>
        )
    }

    export default Card
