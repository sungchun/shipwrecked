import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''

    })
    const [errorInfo, setErrorInfo] = useState({})
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        console.log('submitting')
        console.log('registerdata', registerData)
        event.preventDefault()
        const config = {
            method: "post",
            url: `/api/auth/register/`,
            header: {},
            data: registerData,
        }
        try {
            const response = await axios(config)
            console.log('registering', response.data)
            navigate('/')
        } catch (err) {
            handleError(err)
        }

    }

    function handleError(error) {
        console.log(error)
        if (error.response) {
            console.log(error.response)
            setIsError(true)
            setErrorInfo(error.response.data.message)
            setErrorInfo(error.response)
        }
    }

    function handleChange(event) {
        console.log('changing')
        const { name, value } = event.target
        setRegisterData({
            ...registerData,
            [name]: value
        })
    }

    return (
        <>
            <div className='register-page'>
                <h1>SHIPWRECKED</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input className='input' type='text' name='username' placeholder="Username" onChange={handleChange} />
                    <input className='input' type='text' name='email' placeholder='Email' onChange={handleChange} />
                    <input className='input' type='password' name='password' placeholder='Password' onChange={handleChange} />
                    <input className='input' type='password' name='password_confirmation' placeholder='Password Confirmation' onChange={handleChange} />
                    <input className='button' type='submit' value='REGISTER' />
                    {isError ? (
                        <>
                            <p>Error. Please try again</p>
                        </>
                    ) : (
                        <></>
                    )}
                </form>
            </div>
        </>
    )
}

export default Register