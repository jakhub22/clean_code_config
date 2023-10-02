import Hello, { Bye } from '@/utils'
import React from 'react'

export default function Sidebar() {
    return <div><h2>Sidebar</h2><div>{Hello()}</div><div>{Bye()}</div></div>
}
