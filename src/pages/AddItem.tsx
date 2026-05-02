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

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post("/items", form);
      toast.success("Item added successfully!");

      // reset form
      setForm({
        title: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (err) {
  console.error(err);
  toast.error("Something went wrong!");
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">

      {/* 🔷 HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Item</h1>
        <p className="text-gray-600 mt-2">
          Fill in the details to list your item in the marketplace.
        </p>
      </div>

      {/* 🔷 FORM CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-5"
      >

        {/* TITLE */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Item Title
          </label>
          <input
            value={form.title}
            placeholder="e.g. iPhone 13 Pro"
            className="input"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Price ($)
          </label>
          <input
            type="number"
            value={form.price}
            placeholder="e.g. 500"
            className="input"
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Image URL
          </label>
          <input
            value={form.image}
            placeholder="Paste image link"
            className="input"
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          {/* 🔥 IMAGE PREVIEW */}
          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="mt-3 h-40 w-full object-cover rounded-lg border"
            />
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            value={form.description}
            rows={4}
            placeholder="Describe your item..."
            className="input"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;