import { useState } from "react";
import { useNavigate } from "react-router";


interface CartItem {
  id: number;
  img: string;
  name: string;
  size: string;
  price: number;
  count: number;
  
}

interface CartsProps {
    variant: string;
  }

const Carts = (props:{variant:any,cartItems: CartItem[] }) => {
  const { cartItems: initialCartItems } = props;
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems); 

  const navigate = useNavigate();

  const increaseCount = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseCount = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  const shipping = 4.99;
  const total = subtotal + shipping;

  // cart-1

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.count, 0);
    return subtotal;
  };

  const deliveryCharge = 4.99; // Define your delivery charge here
  const totalAmount = calculateSubtotal() + deliveryCharge;

  return (
    // cart-1
    <>
   

        {(() => {
          switch (props.variant) {
            case 'cart-1':
              return (
                <section className="flex justify-center bg-white shadow-2xl ">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-gray-900 bg-red">Your Cart</h1>
                  </div>
        
                  <div className="mt-8 w-full md:my-12 ">
                    <div className="bg-white shadow-xl rounded-2xl  w-full">
                      <div className=" flex gap-5 px-4 py-6 sm:px-8 sm:py-10 w-full">
                        <div className="flow-root">
                          <ul className="grid grid-cols-1 gap-4 w-full items-center">
                            {cartItems.map((item) => (
                              <li
                                key={item.id}
                                className="grid grid-col-1 md:grid-cols-4 gap-5 content-center w-full space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                              >
                                {/* Content for each cart item */}
                                <div className=" w-24 md:w-1/2 justify-self-center h-32 sm:h-24 bg-white rounded-lg">
                                  <img src={item.img} alt="item" className="w-full h-full object-contain" />
                                </div>
        
                                {/* Rest of the item details (name, size, price, etc.) */}
                                <div>
                                  <p className="text-base font-semibold text-gray-900">{item.name}</p>
                                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{item.size}</p>
                                  <p className="text-base font-semibold text-gray-900 text-left">
                                    Rs/-{item.price.toFixed(2)}
                                  </p>
                                  {/* Add other item details as needed */}
                                </div>
                                {/* quantity of item */}
                                <div className="col-start-4 grid grid-cols-1 gap-4 md:grid-cols-2 place-items-end place-content-start">
                                  <div className=" bg-slate-900 rounded-md flex h-8 items-stretch text-gray-600">
                                    <button
                                      className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black text-white"
                                      onClick={() => decreaseCount(item.id)}
                                    >
                                      -
                                    </button>
                                    <div className="flex w-full text-white items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                      {item.count}
                                    </div>
                                    <button
                                      className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black text-white"
                                      onClick={() => increaseCount(item.id)}
                                    >
                                      +
                                    </button>
                                  </div>
                                  {/* Display item details */}
                                  <button
                                    type="button"
                                    className="flex rounded p-2 text-center  text-gray-500 bg-white transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                    onClick={() => removeItem(item.id)}
                                  >
                                    {/* SVG icon */}
                                    <svg
                                      className="block h-5 w-5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
        
                        {/* Rest of the component remains unchanged */}
        
                        <div className="mt-6 text-center w-full">
                          <div className=" p-4  mt-4">
                          <div className="flex justify-between">
                              {/* display the  items add price  */}
                              {cartItems.map((item) => (
                                <div key={item.id}>{item.price.toFixed(2)}</div>))}
                            </div>
                            <div className="flex justify-between">
                              <p className="text-gray-700">Subtotal</p>
                              <p className="text-gray-700">{calculateSubtotal()} ₹</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-gray-700">Delivery Charges</p>
                              <p className="text-gray-700">{deliveryCharge} ₹</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                              <p className="text-lg font-bold">Total</p>
                              <p className="text-lg font-bold">{totalAmount} ₹</p>
                            </div>
                            <button onClick={() => navigate("/")} className="bg-black shadow-md w-full mt-5 rounded-md text-white font-normal font-Robot p-4">
                      Checkout
                    </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              );

            case 'cart-2':
              return (
                <div className="h-screen bg-slate-200 shadow-lg pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  <div className="rounded-lg md:w-2/3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src={item.img} alt="product-image" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                            <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                          </div>
                          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center border-gray-100">
                              <span
                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                onClick={() => decreaseCount(item.id)}
                              >
                                {' '}
                                -{' '}
                              </span>
                              <input
                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                type="number"
                                value={item.count}
                                min="1"
                                readOnly />
                              <span
                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                onClick={() => increaseCount(item.id)}
                              >
                                {' '}
                                +{' '}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <p className="text-sm">{item.price * item.count} ₭</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                onClick={() => removeItem(item.id)}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Sub total */}
                  <div className="mt-6 h-full w-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700">{subtotal} ₭</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Shipping</p>
                      <p className="text-gray-700">{shipping} ₭</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                      <p className="text-lg font-bold">Total</p>
                      <div>
                        <p className="mb-1 text-lg font-bold">{total} ₭</p>
                        <p className="text-sm text-gray-700">including VAT</p>
                      </div>
                    </div>
                    <button onClick={() => navigate("/")} className="bg-black shadow-md w-full mt-3 rounded-md text-white font-normal font-Robot p-4">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
              );

            default:
              return null;
          }
        })()}
   
     </>
  );
};

export default Carts;
