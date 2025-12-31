import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='notFound'>
            <div className="container">
                <img src="/notFound.svg" alt="notfound" />
                <h1>PAGE NOT FOUND !!!</h1>
                <p><Link to="/">Back to Home 🏠</Link></p>
            </div>
        </section>
    )
}

export default NotFound
