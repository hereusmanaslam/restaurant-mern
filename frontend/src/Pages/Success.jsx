import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Success = () => {
    const [countdown, setCountdown] = useState(10)
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setInterval(() => {
            setCountdown(preCount => {
                if (preCount === 1) {
                    clearInterval(timeout)
                    navigate("/")
                }
                else {
                    return preCount - 1
                }
            })
        }, 1000);
        return () => clearInterval(timeout)
    }, [navigate])


    return (
        <section className='notFound'>
            <div className="container">
                <img src="/sandwich.png" alt="success" />
                <h1>Redirecting to Home in {countdown} seconds ...</h1>
                <Link to="/">Back to Home</Link>
            </div>
        </section>
    )
}

export default Success
