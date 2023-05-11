import { useParams, Link } from 'react-router-dom';

function ProductDetailPage() {

  const params = useParams();
  console.log("params object is "+JSON.stringify(params))

  return (
    <>
      <h1>Product Details!!!!</h1>
      <p>{params.productId}</p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );
}

export default ProductDetailPage;

// amazing concept of why params object has productId as key coz it is defined in App.js