import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const API = "http://localhost:5000/api/items";

  const fetchItems = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async () => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, quantity, serialNumber })
    });
    fetchItems();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Item Manager</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Quantity" onChange={e => setQuantity(e.target.value)} />
      <input placeholder="Serial Number" onChange={e => setSerialNumber(e.target.value)} />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.quantity} - {item.serialNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 