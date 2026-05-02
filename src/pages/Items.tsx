import { useEffect, useState } from "react";
import type { Item } from "../types/item";
import api from "../services/api";
import ItemCard from "../components/ItemCard";

const Items = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get("/items");
        setItems(res.data);
      } catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message);
  }
  setError("Failed to load items");
} finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // 🔍 Filtered items
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl mb-4">Items</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search items..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ⏳ Loading */}
      {loading && <p>Loading items...</p>}

      {/* ❌ Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* 📦 Items */}
      {!loading && !error && (
        <>
          <p className="mb-2 text-sm text-gray-500">
            {filteredItems.length} items found
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {filteredItems.map(item => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>

          {/* 🧊 Empty State */}
          {filteredItems.length === 0 && (
            <p className="text-center mt-10 text-gray-400">
              No items found 😶
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Items;