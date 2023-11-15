export default function Cartreducer(state = false, action: any) {
    switch (action.type) {
      case "AdditemCart":
        return true;
      case "CheckoutCart":
        return false;
      default:
        return state;
    }
  }
  