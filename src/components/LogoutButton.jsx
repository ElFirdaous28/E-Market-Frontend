import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login", { replace: true });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="w-full flex items-center justify-start gap-2 text-red-500 font-semibold px-4 py-2 rounded-lg hover:bg-border transition-colors"
        >
            <LogOut className="w-4 h-4" />
            Logout
        </button>
    );
};

export default LogoutButton;
