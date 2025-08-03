"use client"
import { useState, useEffect } from "react"
import EventCard from '@/components/EventCard'
import { useAuth, useUser } from "@clerk/nextjs";

const Event = () => {

    const eventTiers=['free','silver','gold','platinum']
    const userTier='gold'
    const authDetails=useAuth()
    const userDetails=useUser()
    const [events, setEvents] = useState([])

    const filterTiers=events.filter((event)=>{
        const userTierIndex= eventTiers.indexOf(userTier)
        const eventTierIndex=eventTiers.indexOf(event.tier)
        // console.log("userTIerIndex",userTierIndex,event,eventTierIndex)
        return eventTierIndex<=userTierIndex
    })

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
                {filterTiers.map((item) => {
                    return <EventCard key={item.id} {...item}/>
                })}
            </div>
        </>
    )
}

export default Event