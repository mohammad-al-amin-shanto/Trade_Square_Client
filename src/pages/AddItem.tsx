import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const AddItem = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await api.post("/items", form);
    toast.success("Item added!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <input placeholder="Title" className="input" onChange={(e)=>setForm({...form, title:e.target.value})} />
      <input placeholder="Price" className="input" onChange={(e)=>setForm({...form, price:e.target.value})} />
      <input placeholder="Image URL" className="input" onChange={(e)=>setForm({...form, image:e.target.value})} />
      <textarea placeholder="Description" className="input" onChange={(e)=>setForm({...form, description:e.target.value})} />

      <button className="bg-accent text-white w-full py-2 mt-4">Add</button>
    </form>
  );
};

export default AddItem;