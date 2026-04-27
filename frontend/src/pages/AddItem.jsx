import { useState } from "react";
import axios from "axios";

function AddItem() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    serialNumber: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/items", form);
    alert("Item Added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})} />

      <input placeholder="Price"
        onChange={e => setForm({...form, price: e.target.value})} />

      <input placeholder="Serial Number"
        onChange={e => setForm({...form, serialNumber: e.target.value})} />

      <button>Add Item</button>
    </form>
  );
}

export default AddItem;