import { useCallback, useEffect } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

const RazorpayCode = ({ onClick }: any) => {
  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(async () => {
    try {
      const order = await createOrder();

      const options: RazorpayOptions = {
        key: "rzp_test_xK8VllsVenWWgE",
        amount: order.amount.toString(),
        currency: order.currency,
        name: order.name,
        description: order.description,
        image: order.image,
        order_id: order.id,
        handler: (res) => {
          console.log(res);
          // Handle the payment success or failure here
        },
        prefill: {
          name: order.prefill.name,
          email: order.prefill.email,
          contact: order.prefill.contact,
        },
        notes: {
          address: order.notes.address,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  }, [onClick]);

  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded]);

  return (
    <div className="App">
      {/* You can trigger the payment by clicking the button */}
      <button onClick={handlePayment} className="text-white"></button>
    </div>
  );
};

// Replace this function with your logic to create and retrieve the order details from your backend
const createOrder = async () => {
  // Example order details, replace this with your actual implementation
  return {
    id: "id123",
    amount: 3000,
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    prefill: {
      name: "Piyush Garg",
      email: "youremail@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
  };
};

export default RazorpayCode;
