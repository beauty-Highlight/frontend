import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import  "./SignUp.css"

const SignUp = () => {
    const onClick=()=>{
        navigate("/signin")
    }
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const usernameRef = useRef()
    const signUp = async () => {
        const response = await fetch('http://localhost:3000/customers/', {
            method: 'post',
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                password_confirmation: passwordConfirmationRef.current.value,
                name: usernameRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        window.alert(json.messages)
        if (json.success) {
            //go to sign in
            navigate('/signin')
        }
    }

    return (
        <div className="container my-4">
            <div className="row">
              
                <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4  border border-1">
                    {/* <svg id="img" xmlns="https://mostaql.com/portfolio/372379-animated-gif-%D8%B5%D9%88%D8%B1-%D9%85%D8%AA%D8%AD%D8%B1%D9%83%D8%A9"></svg> */}
                    <img src="imggg.gif"></img>
                    <h3 className="mb-4">Create  Account</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input ref={usernameRef} type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input ref={emailRef} type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input ref={passwordRef} type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordConfirmation" className="form-label">Password Confirmation</label>
                            <input ref={passwordConfirmationRef} type="password" className="form-control" id="passwordConfirmation" />
                        </div>
                        <button onClick={onClick} type="button" className="btn btn-primary  bg-black m-2 ">Go To Login</button>

                        <button onClick={signUp} type="button" className="btn btn-primary m-4 ">Register</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SignUp;