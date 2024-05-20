import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


interface Product {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then((data: Product[]) => setProducts(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
                {products.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id} className="hover:opacity-75">
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img className='p-9' src={product.imageUrl} alt={product.title} />
                            <h2 className='pl-3 text-blue-600'>{product.title}</h2>
                            <p className='pl-3 text-red-700'>R${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
