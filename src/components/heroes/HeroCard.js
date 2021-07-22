import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card m-1 mt-5" style={{maxWidth: 240}}>
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                {
                    (alter_ego !== characters)
                    && <p className="card-text">{characters}</p>
                }
                <p className="card-text">
                    <small className="text-muted">{first_appearance}</small>
                </p>
                <Link to={`./hero/${ id }`}>
                    Mas...
                </Link>
                {/* <a href="#s" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}
