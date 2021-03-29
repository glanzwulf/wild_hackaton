import React, {useState} from 'react'
import LoadingSpinner from './LoadingSpinner'

export default function UseFullPageLoader() {
    const [loading, setLoading] = useState(false)
    return [
        loading ?  <LoadingSpinner /> : null,
        () => setLoading(true),
        () => setLoading(false)
    ]
}
