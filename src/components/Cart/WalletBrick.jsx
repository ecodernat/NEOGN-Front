import { useState, useEffect, Suspense, lazy } from "react";
import { Wallet } from "@mercadopago/sdk-react";
import { useSelector } from "react-redux";
import axios from "axios";

const WalletPayment = ({ prefId }) => {
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.cart.items);
  const amount = useSelector((state) => state.cart.totalPrice);
  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async (items) => {
    try {
      console.log(user.id);
      const response = await axios.post(
        "http://localhost:3001/api/payment/create-preference",
        {
          userId: user.id,
          items: items.map((item) => ({
            id: item.id,
            title: item.name,
            description: item.description.slice(0, 240) + "...",
            picture_url: item.image[0],
            quantity: item.quantity,
            unit_price: item.price,
          })),
          transaction_amount: amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      const id = data.id;

      return id;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    async function fetchPreferenceId() {
      const id = await createPreference(items);
      setPreferenceId(id);
    }
    fetchPreferenceId();
  }, []);

  const LazyWallet = lazy(() => {
    return new Promise((resolve) => {
      if (prefId && prefId !== null) {
        resolve({
          default: () => (
            <Wallet initialization={{ amount, prefId, redirectMode: "self" }} />
          ),
        });
      } else if (preferenceId !== null) {
        resolve({
          default: () => (
            <Wallet
              initialization={{ amount, preferenceId, redirectMode: "self" }}
              customization={{
                visual: { buttonBackground: "black", borderRadius: "20px" },
              }}
            />
          ),
        });
      }
    });
  });

  return (
    <div>
      <Suspense
        fallback={
          <span className="items=center text-base font-bold -leading-tight">
            Cargando...
          </span>
        }
      >
        <LazyWallet />
      </Suspense>
    </div>
  );
};

export default WalletPayment;
