import { Image } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../services/axios";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("/products");
                setProducts(res.data.data || []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);


    if (loading) return <div>Loading products...</div>;

    return (
        <section className="w-3/4 mx-auto">
            <h2 className="text-3xl font-bold text-textMain mb-6">Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                {products.length > 0 ? (
                    products.slice(0, 8).map((product) => (
                        <div
                            key={product._id}
                            className="bg-surface rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-primary"
                        >
                            {/* Product Image */}
                            <div className="bg-border aspect-square flex items-center justify-center">
                                {product.primaryImage ? (
                                    <img
                                        src={`http://localhost:3000${product.primaryImage}`}
                                        alt={product.title}
                                        className="object-cover w-4/5 h-4/5"
                                    />
                                ) : (
                                    <Image className="w-16 h-16 text-gray-500" />
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-textMain">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-textMuted mt-1 line-clamp-2">
                                    {product.description || "No description available"}
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xl font-bold text-primary">
                                        ${product.price?.toFixed(2) ?? "N/A"}
                                    </span>
                                    <button className="border border-primary hover:bg-primary text-textMain text-sm px-4 py-2 rounded-full font-semibold transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-textMuted col-span-full text-center">
                        No products available
                    </p>
                )}
            </div>

            <div className="text-primary mt-10 text-right">
                <Link
                    to="/products"
                    className="text-primary font-semibold hover:underline"
                >
                    View All &rarr;
                </Link>
            </div>
        </section>
    );
}
