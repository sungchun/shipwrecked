import { useState } from "react"
import { setID, setToken } from "../helpers/auth"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate()

    function handleLogin(data) {
        const { token, id } = data
        setToken(token)
        setIsError(false)
        setID(id)
        navigate('/saves')
    }

    function handleError(error) {
        console.log(error)
        if (error.response) {
            console.log(error.response)
            setIsError(true)
        }
    }

    async function handleSubmit(event) {
        console.log('submitting')
        event.preventDefault()
        const config = {
            method: "post",
            url: `/api/auth/login/`,
            header: {
                'Content-Type': 'application/json'
            },
            data: loginData,
        }
        try {
            const response = await axios(config)
            console.log(response)
            handleLogin(response.data)
            return response.data
        } catch (err) {
            setIsError(true)
            handleError(err)
        }
    }

    function handleChange(event) {
        console.log('changing')
        const { name, value } = event.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    return (
        <>
            <div className='login-page'>
                {/* <img src='https://i.imgur.com/Hddyf9Z.gifv' /> */}
                <h1>SHIPWRECKED</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input className='input' type='text' name='username' placeholder="Username" onChange={handleChange} />
                    <input className='input' type='password' name='password' placeholder='Password' onChange={handleChange} />
                    <div>
                        <input className='button' type='submit' value='LOGIN' />
                    </div>
                    {isError ? (
                        <>
                            <p>Error. Please try again</p>
                        </>
                    ) : (
                        <></>
                    )}
                    <p>Don't have an account? Register <Link to="/register">here</Link></p>
                </form>
            </div>
        </>
    )
}

export default Login