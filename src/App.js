import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateSignInPage from './components/signin/CreateSigninPage.js';
import Home from './components/Home/Home.js';
function App() {
	return (
		<div className='App'>
			<Router>
				
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/signin' element={<CreateSignInPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
