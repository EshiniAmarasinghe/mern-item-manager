import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items")
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <div key={item._id}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Serial: {item.serialNumber}</p> {/* ✅ NEW FIELD */}
        </div>
      ))}
    </div>
  );
}

export default Home;