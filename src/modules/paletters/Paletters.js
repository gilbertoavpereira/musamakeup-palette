import React from "react";
import { glitters, labels } from "../../data";

import className from "classnames";

export default function Paletters({
  size,
  setSize,
  selectedGlitters,
  onRemoveGlitter,
  showAddToCart
}) {
  const rows = [];
  for (let i = 0; i < size; i++) {
    const src =
      selectedGlitters[i] !== undefined && selectedGlitters[i] !== -1
        ? glitters[selectedGlitters[i]].src
        : "https://cdn.shopify.com/s/files/1/1338/0835/files/nero.png?3765343068372667978";

    rows.push(
      <img
        onClick={() => {
          onRemoveGlitter(selectedGlitters[i]);
        }}
        src={src}
        alt=""
      />
    );
  }
  return (
    <div class="top">
      <h5>{!showAddToCart ? labels.selectEyeShadowPans : "GREAT CHOICE"}</h5>
      <div class="selected">{rows}</div>
      {showAddToCart && (
        <h6>
          <input type="checkbox" />
          CREAMY GLITTER BRUSH<span>{"+7.00 €"}</span>
        </h6>
      )}
      {showAddToCart && (
        <div class="adds">
          <button class="add">{labels.addToCart} (10.00 €)</button>
        </div>
      )}
      {!showAddToCart && (
        <h6>
          {labels.selectEyeShadowPans} <span>{"10.00 €"}</span>
        </h6>
      )}
      {!showAddToCart && (
        <div class="holes">
          <button
            class={className("hole", { active: size === 6 })}
            onClick={() => {
              setSize(6);
            }}
          >
            6 hole
          </button>
          <button
            class={className("hole", { active: size === 18 })}
            onClick={() => {
              setSize(18);
            }}
          >
            18 hole
          </button>
        </div>
      )}
    </div>
  );
}
