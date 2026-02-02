// src/routes/Cart.jsx
import React, { useState } from "react";
import { useStore } from "../context/StoreContext";
import { CartItem } from "../components/CartItem";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Cart() {
  const {
    state: { cart },
    dispatch
  } = useStore();

  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [orderPlacedId, setOrderPlacedId] = useState(null);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = e => {
    e.preventDefault();
    if (!cart.length) return;
    dispatch({
      type: "PLACE_ORDER",
      payload: { customer }
    });
    const id = `ORD-${Date.now()}`;
    setOrderPlacedId(id);
    setCustomer({
      name: "",
      company: "",
      email: "",
      phone: "",
      notes: ""
    });
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-lg font-semibold text-slate-900">
        Cart & order details
      </h1>
      <p className="mt-1 text-xs text-slate-600">
        Review your selected mechanical components and share your contact details. You will receive a formal quotation and order confirmation by email.
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr,1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Items in cart
          </h2>
          {cart.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">
              Your cart is empty. Browse the products catalogue and add items to proceed with ordering.
            </p>
          ) : (
            <div className="mt-3">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        <form
          onSubmit={handlePlaceOrder}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-900">
            Contact & shipping details
          </h2>
          <div className="mt-3 space-y-3">
            <Input
              required
              name="name"
              value={customer.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <Input
              name="company"
              value={customer.company}
              onChange={handleChange}
              placeholder="Company (optional)"
            />
            <Input
              required
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              placeholder="Work email"
            />
            <Input
              required
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              placeholder="Mobile / phone"
            />
            <textarea
              name="notes"
              value={customer.notes}
              onChange={handleChange}
              rows={3}
              className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Share machine details, required brands, delivery timelines or any other notes…"
            />
          </div>
          <div className="mt-4 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">
                Order value (approx.)
              </span>
              <span className="font-semibold text-slate-900">
                ₹{total}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Prices are indicative. Final taxes, shipping and discounts will be confirmed in the quotation.
            </p>
          </div>
          <Button
            type="submit"
            fullWidth
            disabled={!cart.length}
            className="mt-4 w-full bg-blue-600 text-xs hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Place order / request quote
          </Button>
          {orderPlacedId && (
            <div className="mt-3 flex items-start gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-[11px] text-emerald-800">
              <CheckCircleIcon
                fontSize="small"
                className="mt-[2px]"
              />
              <div>
                <p className="font-semibold">
                  Order request submitted.
                </p>
                <p>
                  Our team will reach out to you with a quotation and delivery details shortly.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
