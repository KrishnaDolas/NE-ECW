// src/components/CartItem.jsx
import React from "react";
import { useStore } from "../context/StoreContext";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export function CartItem({ item }) {
  const { dispatch } = useStore();

  const handleQtyChange = e => {
    const value = parseInt(e.target.value, 10) || 0;
    dispatch({
      type: "UPDATE_CART_QTY",
      payload: { id: item.id, qty: value }
    });
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: item.id }
    });
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-100 bg-white/90 px-3 py-3 shadow-sm">
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold text-slate-900">
          {item.name}
        </p>
        <p className="text-[11px] text-slate-500">
          Unit price: ₹{item.price}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full border border-emerald-100 bg-emerald-50/60 px-2 py-1">
          <input
            type="number"
            min={0}
            value={item.qty}
            onChange={handleQtyChange}
            className="w-14 border-none bg-transparent text-center text-xs text-slate-900 outline-none"
          />
        </div>

        <p className="w-20 text-right text-sm font-semibold text-emerald-800">
          ₹{item.price * item.qty}
        </p>

        <IconButton
          size="small"
          color="error"
          onClick={handleRemove}
          aria-label="Remove item"
        >
          <Delete fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
