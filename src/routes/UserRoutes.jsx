import { Route } from "react-router-dom";
import Products from "../pages/Products";


export default function UserRoutes() {
    return (
        <>
            <Route path="/products" element={<Products />} />
        </>
    )
}
