import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setData(res.data.products);
      console.log(res.data.products);
    });
  }, []);

  return (
    <div className="App">
      Welcome to Gimesto Store
      <div>
        {data &&
          data.map((item) => (
            <div>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
