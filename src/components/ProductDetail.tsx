import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

interface Comment {
  id: number;
  productId: number;
  comment: string;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(response => response.json())
      .then((data: Product) => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));

    fetch(`http://localhost:5000/comments?productId=${id}`)
      .then(response => response.json())
      .then((data: Comment[]) => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [id]);

  if (!product) {
    return <div>404</div>;
  }

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        <img className="w-1/2" src={product.imageUrl} alt={product.title} />
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-900">{product.title}</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">R${product.price}</p>
          <div className="mt-8">
            {comments.map(comment => (
              <div key={comment.id}>
                <p className="text-gray-800">{comment.comment}</p>
              </div>
            ))}
            <button className="mt-4 bg-emerald-700 font-semibold text-white px-6 py-3 rounded-md">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
