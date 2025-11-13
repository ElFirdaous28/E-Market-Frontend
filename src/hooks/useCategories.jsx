import { useEffect, useState } from "react";
import axios from "../services/axios";


export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);
        setError(null);

        (async () => {
            try {
                const res = await axios.get("/categories/product-number");
                setCategories((res.data.data));
            } catch (error) {
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        })();

    }, []);


    return { categories, loading, error };
};
