import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [dateTime, setDateTime] = useState('')

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()

            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


            const day = dayNames[now.getDay()]
            const month = monthNames[now.getMonth()]
            const date = now.getDate()

            let hours = now.getHours()
            const minutes = now.getMinutes().toString().padStart(2, '0')
            const ampm = hours >= 12 ? 'PM' : 'AM'
            hours = hours % 12 || 12

            const formattedDateTime = `${day} ${month} ${date} ${hours}:${minutes}${ampm}`
            setDateTime(formattedDateTime)
        }

        updateDateTime()
        const interval = setInterval(updateDateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>{dateTime}</div>
    )
}

export default DateTime