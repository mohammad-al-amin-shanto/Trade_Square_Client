import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Item } from "../types/item";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`)
      .then(res => setItem(res.data));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <img src={item.image} className="w-full max-h-96 object-cover" />
      <h1 className="text-3xl font-bold mt-4">{item.title}</h1>
      <p className="mt-2">{item.description}</p>
      <p className="text-xl text-accent mt-2">${item.price}</p>
    </div>
  );
};

export default ItemDetails;