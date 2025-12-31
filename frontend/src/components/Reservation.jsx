import React from 'react'
import { HiOutlineArrowCircleRight, HiOutlineArrowNarrowRight } from "react-icons/hi"
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState(0)
    const navigate = useNavigate()  // making instance

    const handleReservation = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("https://web-production-de894.up.railway.app/api/v1/reservation/send",
                { firstName, lastName, email, date, time, phone },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message)

            setFirstName("")
            setLastName("")
            setEmail("")
            setDate("")
            setTime("")
            setPhone(0)
            navigate("/Success")
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Failed to make reservation. Please try again.")
        }
    }
    
    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="reservation" />
                </div>

                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For further Queries, Please Call!</p>

                        <form onSubmit={handleReservation}>
                            <div>
                                <input
                                    type="text"
                                    placeholder='First name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder='Last name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date" placeholder='Date' value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="time" placeholder='Time' value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='email_tag'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder='Phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <button type='submit' style={{ cursor: "pointer" }}>RESERVE NOW <span><HiOutlineArrowCircleRight /></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservation
