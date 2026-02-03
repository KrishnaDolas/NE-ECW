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

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

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
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
        Your basket
      </p>
      <h1 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
        Review items & share delivery details.
      </h1>
      <p className="mt-1 text-xs text-slate-600">
        Check your selected food products and tell us where to deliver. You&apos;ll
        receive a confirmation with final bill and delivery slot over email or WhatsApp.
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr,1fr]">
        {/* Cart items */}
        <div className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Items in your basket
          </h2>
          {cart.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">
              Your basket is empty. Browse the catalogue and add fruits, vegetables and
              pantry items to place an order.
            </p>
          ) : (
            <div className="mt-3 space-y-3">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Customer details */}
        <form
          onSubmit={handlePlaceOrder}
          className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-900">
            Contact & delivery info
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
              placeholder="Restaurant / company (optional)"
            />
            <Input
              required
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              placeholder="Email for order updates"
            />
            <Input
              required
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              placeholder="Mobile / WhatsApp number"
            />
            <textarea
              name="notes"
              value={customer.notes}
              onChange={handleChange}
              rows={3}
              className="block w-full rounded-lg border border-emerald-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Add delivery address, preferred slot, special handling (e.g. no contact delivery, extra ice packs)…"
            />
          </div>

          <div className="mt-4 border-t border-emerald-100 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">
                Estimated order value
              </span>
              <span className="font-semibold text-emerald-700">
                ₹{total}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Final bill may vary slightly based on exact weight of fresh items, taxes
              and delivery charges. We&apos;ll confirm before dispatch.
            </p>
          </div>

          <Button
            type="submit"
            fullWidth
            disabled={!cart.length}
            className="mt-4 w-full bg-emerald-600 text-xs font-semibold text-emerald-50 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
          >
            Place order request
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
                  Our team will confirm availability, pricing and delivery slot with you
                  shortly on your shared contact details.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
