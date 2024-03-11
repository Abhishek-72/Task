import { Card, Button } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div className="bg-amber-100 min-h-screen py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <Card className="shadow-lg bg-white rounded-3xl w-full md:w-80 mx-2 overflow-hidden hover:scale-105 transform transition duration-500 ease-in-out">
          <img
            className="w-full rounded-t-xl"
            src="https://github.com/DNXEMPIRE-1/Jewelry-Store-eCommerce/blob/main/assets/img/product-1.jpg?raw=true"
            alt="CROWN SUMMIT BACKPACK"
          />
          <div className="p-4">
            <h1 className="font-bold text-gray-600 text-center">
              CROWN SUMMIT BACKPACK
            </h1>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Price:</span>
              <span className="text-green-500">$19.99</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Quantity:</span>
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <Button gradientDuoTone="purpleToBlue" outline>
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>

        <Card className="shadow-lg bg-white rounded-3xl max-w-xs mx-2 overflow-hidden hover:scale-105 transform transition duration-500 ease-in-out">
          <img
            className="w-full rounded-t-xl"
            src="https://github.com/DNXEMPIRE-1/Jewelry-Store-eCommerce/blob/main/assets/img/jewellery-cat.jpg?raw=true"
            alt="CROWN SUMMIT BACKPACK"
          />
          <div className="p-4">
            <h1 className="font-bold text-gray-600 text-center">
              THE EMERALD ISLE
            </h1>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Price:</span>
              <span className="text-green-500">$250.99</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Quantity:</span>
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <Button gradientDuoTone="purpleToBlue" outline>
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
        <Card className="shadow-lg bg-white rounded-3xl max-w-xs mx-2 overflow-hidden hover:scale-105 transform transition duration-500 ease-in-out">
          <img
            className="w-full rounded-t-xl"
            src="https://jewelry-store-e-commerce.vercel.app/assets/img/single-pro-thumb-3.jpg"
            alt="CROWN SUMMIT BACKPACK"
          />
          <div className="p-4">
            <h1 className="font-bold text-gray-600 text-center">
              IRON RING OF PROMETHEUS
            </h1>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Price:</span>
              <span className="text-green-500">$200.00</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Quantity:</span>
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <Button gradientDuoTone="purpleToBlue" outline>
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
