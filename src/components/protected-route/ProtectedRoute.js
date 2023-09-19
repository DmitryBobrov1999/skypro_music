import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ redirectPath = '/login', children }) => {
	const userInfo = localStorage.getItem('user');

	if (userInfo === null) {
		return <Navigate to={redirectPath} />;
	}
	return <>{children}</>;
};
