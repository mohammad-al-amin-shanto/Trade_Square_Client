import { Link } from "react-router-dom";
import { Item } from "../types/item";

const ItemCard = ({ item }: { item: Item }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={item.image} className="h-40 w-full object-cover" />
      <h3 className="font-bold mt-2">{item.title}</h3>
      <p>${item.price}</p>
      <Link
        to={`/items/${item._id}`}
        className="text-accent mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default ItemCard;