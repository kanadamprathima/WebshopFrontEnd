import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [product, setProduct] = useState({});

  const params = useParams();

  const fetchProduct = async () => {
    const product = await axios.get(
      `http://localhost:4000/products/${params.id}`
    );
    console.log.status(200).send(product);
    setProduct(product.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="bigBanner"> text and image </div>
      <div className="pageContent">
        <div className="productCard">
          <h1>product card</h1>
          <p>{product.title}</p>
          <p> {product.id} </p>
          <p> {product.description} </p>
          <p> {product.rating} </p>
          <img src={product.mainimage} />
        </div>
        <div className="footer"> footer </div>
      </div>
    </div>
  );
};

export default DetailsPage;
