import { useEffect, useState } from "react";
import type { Item } from "../types/item";
import axios from "axios";
import ItemCard from "../components/ItemCard";


const Items = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/items")
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Items</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {items.map(item => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Items;