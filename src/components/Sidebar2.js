import React from 'react'

import Hello, { Bye } from '@/utils'

export default function Sidebar() {
    return (
        <div>
            <h2>Sidebar</h2>
            <div>{Hello()}</div>
            <div>{Bye()}</div>
        </div>
    )
}
