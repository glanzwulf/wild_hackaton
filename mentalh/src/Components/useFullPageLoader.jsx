import React from 'react'
import FullPageLoader from './FullPageLoader'

export default function useFullPageLoader() {
    const [loading, setLoading] = useState(false)
    return [
        loading ? <FullPageLoader /> : null,
        () => setLoading(true), //Show loader
        () => setLoading(false) //Hide Loader
    ]  
}

