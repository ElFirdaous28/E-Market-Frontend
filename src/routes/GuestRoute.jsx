import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const GuestRoute = () => {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    // If user is logged in, redirect to a default protected page
    if (user) return <Navigate to="/" replace />;

    return <Outlet />;
};

export default GuestRoute;
