import React from 'react'

import Nav from '@/components/Nav'
import Hello, { Bye } from '@/utils'

export default function Home() {
    return (
        <div>
            <Nav />
            <h1>Home !!</h1>
            <div>{Hello()}</div>
            <div className='m-2 flex w-full items-center p-2 py-3'>{Bye()}</div>
        </div>
    )
}
