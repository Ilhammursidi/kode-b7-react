import { useState,useEffect } from "react";
/**
 * a fetch data custom hook
 * 
 */

export function useFetch() {
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState("")
    const [dataFetch, setDataFetch] = useEffect(()=>{
        const dataFetch = async (url, options = {}) => {
        try {
            isLoading(true)
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`${response.status}:${response.statusText}`);
            const data = await response.json();
            isLoading(false)
            setDataFetch(data)
        } catch (error) {
            setError(error)
        }
    }
    

    return [dataFetch,loading,error]
},[])


    
}