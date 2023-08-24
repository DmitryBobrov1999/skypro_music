import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateSignInPage from './components/signin/CreateSigninPage.js';
import CreateSignUpPage from './components/signup/CreateSignupPage.js';
import Home from './components/home/Home.js';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './App.styles';

function App() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 2000);
	}, []);

	return (
		<div className='App'>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route exact path='/' element={<Home isLoading={isLoading} />} />
					<Route path='/signin' element={<CreateSignInPage />} />
					<Route path='/signup' element={<CreateSignUpPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
