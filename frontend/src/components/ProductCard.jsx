import React from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { useStore } from "../context/StoreContext";
import { Rating } from "@mui/material";

export function ProductCard({ product }) {
  const { dispatch } = useStore();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        currency: product.currency,
        qty: 1
      }
    });
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-slate-900/80 border-slate-800 hover:border-sky-500/70 transition-colors shadow-lg shadow-slate-950/40">
      <div className="relative aspect-[4/3] w-full bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {product.inStock ? (
          <span className="absolute left-2 top-2 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950">
            In stock
          </span>
        ) : (
          <span className="absolute left-2 top-2 rounded-full bg-amber-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950">
            Lead time
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-400">
              {product.category}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-50">
              {product.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-slate-400">{product.brand}</p>
            <p className="text-sm font-semibold text-sky-300">
              ₹{product.price}
            </p>
          </div>
        </div>
        <p className="line-clamp-2 text-[11px] text-slate-400">
          {product.shortDescription}
        </p>
        <div className="mt-1 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <Rating
              name={`rating-${product.id}`}
              size="small"
              value={product.rating}
              precision={0.5}
              readOnly
            />
            <span className="text-[11px] text-slate-500">
              {product.rating.toFixed(1)}
            </span>
          </div>
          {!product.inStock && (
            <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
              Request quote
            </span>
          )}
        </div>
        <div className="mt-3">
          <Button
            fullWidth
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className="w-full bg-sky-500 text-xs font-semibold text-slate-950 hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          >
            {product.inStock ? "Add to cart" : "Out of stock"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
