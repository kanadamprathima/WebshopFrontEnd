import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import NavBar from "./component/NavBar/index";

const DetailsPage = () => {
  const [product, setProduct] = useState({});

  const params = useParams();

  const fetchProduct = async () => {
    const product = await axios.get(
      `http://localhost:4000/products/${params.id}`
    );
    console.log(product);
    setProduct(product.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <p>{product.title}</p>
      <p> {product.id} </p>
      <p> {product.description} </p>
    </div>
  );
};

export default DetailsPage;
