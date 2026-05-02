import { useEffect, useState } from "react";
import api from "../services/api";
import type { Item } from "../types/item";

const ManageItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get("/my-items").then(res => setItems(res.data));
  }, []);

  const handleDelete = async (id: string) => {
    await api.delete(`/items/${id}`);
    setItems(items.filter(i => i._id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">My Items</h2>

      {items.map(item => (
        <div key={item._id} className="flex justify-between border p-2 mb-2">
          <span>{item.title}</span>
          <button onClick={()=>handleDelete(item._id)} className="text-red-500">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageItems;