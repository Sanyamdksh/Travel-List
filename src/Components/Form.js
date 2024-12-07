import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);
  // const [items, setItems] = useState([]);

  function handleSub(e) {
    e.preventDefault();

    if (!description) return;

    const addItem = { description, quantity, packed: false, id: Date.now() };
    console.log(addItem);

    onAddItem(addItem);
    setDescription("");
    setquantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSub}>
      <h3>What do you need for the trip😉?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
