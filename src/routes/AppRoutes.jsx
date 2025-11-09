import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthRoutes from "./AuthRoutes"
import NotFound from "../pages/NotFound"
import DarkToggle from "../pages/darkToggel"
import Products from "../pages/Products"
import { Home } from "../pages/Home"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<Products />}></Route>
                {AuthRoutes()}

                {/* catche not found routes */}
                <Route path="/theme" element={<DarkToggle />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes