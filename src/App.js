import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
const App = () => {

	
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/signin" element={<SignIn />} />
				<Route path="/signout" element={<SignOut />} />
				<Route path='/SignUp' element={< SignUp />} /> */}
			</Routes>
		</>
	);
}

export default App;