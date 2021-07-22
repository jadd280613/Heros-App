import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div className="container mt-5">
            <h1>DC Screen</h1>
            <hr />
            <HeroList
                publisher="DC Comics"
            />
        </div>
    )
}
