import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthRoutes from "./AuthRoutes"
import NotFound from "../pages/NotFound"
import DarkToggle from "../pages/darkToggel"
import { Home } from "../pages/Home"
import ProtectedRoute from "./ProtectedRoute"
import UserRoutes from "./UserRoutes"
import GuestRoute from "./GuestRoute"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route element={<GuestRoute />}>
                    {AuthRoutes()}
                </Route>

                {/* Protect all user routes */}
                <Route element={<ProtectedRoute allowedRoles={['user']} />}>
                    {UserRoutes()}
                </Route>

                {/* catche not found routes */}
                <Route path="/theme" element={<DarkToggle />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes