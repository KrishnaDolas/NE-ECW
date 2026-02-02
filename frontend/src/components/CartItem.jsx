// src/components/CartItem.jsx
import React from "react";
import { useStore } from "../context/StoreContext";
import { IconButton, TextField } from "@mui/material";
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
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 py-3">
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-medium text-slate-900">
          {item.name}
        </p>
        <p className="text-xs text-slate-500">
          Unit price: ₹{item.price}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <TextField
          type="number"
          size="small"
          value={item.qty}
          onChange={handleQtyChange}
          inputProps={{ min: 0, className: "text-sm" }}
          className="w-20"
        />
        <p className="w-20 text-right text-sm font-medium text-slate-900">
          ₹{item.price * item.qty}
        </p>
        <IconButton
          size="small"
          color="error"
          onClick={handleRemove}
        >
          <Delete fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
