import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ redirectPath = '/login', children }) => {
	const user = localStorage.getItem('user');

	if (user === null) {
		return <Navigate to={redirectPath} />;
	}

	return <>{children}</>;
};
