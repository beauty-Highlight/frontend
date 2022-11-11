import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignOut() {
    const navigate = useNavigate()
    const ctx = useContext(AuthContext)
    useEffect(() => {
        ctx.logout()
        navigate('/signin')
    }, [])
    return <></>
}

export default SignOut