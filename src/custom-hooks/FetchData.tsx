import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //useEffect on mount
    // with nothing after useEffect something will occur every time something changes
    // [] - will occur on mount, when the data table component is populated one time
    // [componentName], allows useEffect to just look for the componentName
    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch }
}