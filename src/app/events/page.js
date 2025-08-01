"use client"
import { useState, useEffect } from "react"

const Event = () => {

    const [events, setEvents] = useState([])
    useEffect(() => {
        async function fetchEvents() {
            const result = await fetch('api/event')
            const data = await result.json()
            console.log(data)
            setEvents(data)
        }
        fetchEvents()
        console.log(events)
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 justify-items-center p-6">
                {events.map((item) => {
                    const formattedDate = new Date(item.event_date).toLocaleDateString('en-GB');
                    return (
                        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <div>
                                <span className="inline-flex items-center justify-center rounded-md bg-gray-400 p-1 shadow-lg">
                                    {/* <img src={`${item.image_url}`} alt="Image"></img> */}
                                    <img src={`${item.image_url}`} alt="Event Banner" className="w-100 h-80 object-cover rounded-md"/>
                                </span>
                            </div>
                            <h3 className="text-gray-900 dark:text-white mt-4 text-lg font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{item.description}</p>
                            <p className="text-gray-400 dark:text-gray-300 mt-1 text-sm">📅 {formattedDate}</p>
                            <span
                                className={`capitalize inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full 
                                    ${item.tier === 'platinum'
                                        ? 'bg-gradient-to-r from-gray-300 to-gray-100 text-black shadow shadow-cyan-500/50'
                                        : item.tier === 'gold'
                                            ? 'bg-yellow-400 text-white shadow'
                                            : item.tier === 'silver'
                                                ? 'bg-gray-400 text-white'
                                                : item.tier === 'free'
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-gray-500 text-white'
                                    }`}
                            >
                                {item.tier}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-3">
                <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                    <div>
                        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                            <svg class="h-6 w-6 stroke-white">
                            </svg>
                        </span>
                    </div>
                    <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                    <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
            </div> */}
        </>
    )
}

export default Event