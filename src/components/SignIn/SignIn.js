import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const SignIn = () => {

    const navigate = useNavigate()

    const ctx = useContext(AuthContext)
    const usernameRef = useRef()
    const passwordRef = useRef()
    const signIn = async () => {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'post',
            body: JSON.stringify({
                email: usernameRef.current.value,
                password: passwordRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(loggedIn => {
                if (loggedIn.success) {
                    
                    ctx.login(loggedIn.token)
                    window.localStorage.setItem("token", loggedIn.token)
                    navigate('/')
                }
            })
        })

    }

    const signUp = () => {
        navigate('/SignUp')
    }


    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4    border border-1">
                    <h3 className="mb-4">Sign In</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input ref={usernameRef} type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input ref={passwordRef} type="password" className="form-control" id="password" />
                        </div>
                        <button onClick={signIn} type="button" className="btn btn-primary">Log in</button>,
                        <button onClick={signUp} type="button" className="btn btn-primary">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;