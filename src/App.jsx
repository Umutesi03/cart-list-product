import DessertList from "./components/DessertList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="bg-pink-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Desserts</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <DessertList />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
