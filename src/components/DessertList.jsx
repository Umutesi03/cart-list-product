import { useEffect, useState } from "react";
import DessertCard from "./DessertCard";

const DessertList = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setDesserts)
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {desserts.map((dessert, i) => (
        <DessertCard key={i} dessert={dessert} />
      ))}
    </div>
  );
};

export default DessertList;
