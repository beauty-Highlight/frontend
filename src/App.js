import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn.js";
import Home from "./components/Home/Home";
import SignOut from "./components/SignOut/SignOut";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {

	
	return (
		<>
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signout" element={<SignOut />} />
				<Route path='/SignUp' element={< SignUp />} />


			</Routes>
		</>
	);
}

export default App;