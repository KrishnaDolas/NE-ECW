import React, { useState } from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { useStore } from "../context/StoreContext";
import { Rating } from "@mui/material";

export function ProductCard({ product }) {
  const { dispatch } = useStore();

  const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;

  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );

  const price =
    selectedVariant?.price ?? product.price ?? 0;

  const image =
    selectedVariant?.image ?? product.image;

  const inStock =
    typeof selectedVariant?.inStock === "boolean"
      ? selectedVariant.inStock
      : product.inStock ?? true;

  const ratingValue =
    typeof product.rating === "number" ? product.rating : 0;

  const handleAddToCart = () => {
    if (hasVariants && !selectedVariant) return;

    const id = hasVariants
      ? `${product.id}-${selectedVariant.sku}`
      : product.id;

    const name = hasVariants && selectedVariant?.weight
      ? `${product.name} (${selectedVariant.weight})`
      : product.name;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        name,
        price,
        currency: product.currency || "INR",
        qty: 1,
        image,
        sku: selectedVariant?.sku,
        weight: selectedVariant?.weight
      }
    });
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden border border-[#BA5C1E]/20 bg-white shadow-sm hover:shadow-md hover:border-[#BA5C1E]/40 transition-all">
      {/* Image */}
      <div className="relative aspect-[1/1] w-full overflow-hidden bg-[#BA5C1E]/10">
        {image && (
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        )}

        {inStock ? (
          <span className="absolute left-2 top-2 rounded-full bg-[#BA5C1E]/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
            In stock
          </span>
        ) : (
          <span className="absolute left-2 top-2 rounded-full bg-amber-500/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-amber-950">
            Pre-order
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#BA5C1E]">
              {product.category}
            </p>
            <h3 className="mt-0.5 text-[13px] font-semibold text-slate-900 leading-snug">
              {product.name}
            </h3>
          </div>

          <div className="text-right">
            {product.brand && (
              <p className="text-[10px] text-slate-400">{product.brand}</p>
            )}
            <p className="text-sm font-semibold text-[#BA5C1E]">
              ₹{price}
            </p>
          </div>
        </div>

        <p className="line-clamp-2 text-[10px] text-slate-500">
          {product.description || product.shortDescription}
        </p>

        {/* Variant selector */}
        {hasVariants && (
          <div className="mt-2 flex flex-wrap gap-1">
            {product.variants.map(variant => (
              <button
                key={variant.sku}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`rounded-full border px-2.5 py-0.5 text-[10px] ${
                  selectedVariant?.sku === variant.sku
                    ? "border-[#BA5C1E] bg-[#BA5C1E]/10 text-[#BA5C1E] font-semibold"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#BA5C1E]/60"
                }`}
              >
                {variant.weight}
              </button>
            ))}
          </div>
        )}

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Rating
              name={`rating-${product.id}`}
              size="small"
              value={ratingValue}
              precision={0.5}
              readOnly
            />
            <span className="text-[10px] text-slate-500">
              {ratingValue.toFixed(1)}
            </span>
          </div>

          {!inStock && (
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[9px] text-amber-800 border border-amber-100">
              Check availability
            </span>
          )}
        </div>

        <div className="mt-2">
          <Button
            fullWidth
            disabled={!inStock || (hasVariants && !selectedVariant)}
            onClick={handleAddToCart}
            className="w-full text-[11px] font-semibold disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
          >
            {inStock ? "Add to cart" : "Out of stock"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
