import React from "react";
import { glitters } from "../../data";

import className from "classnames";

export default function Paletters({
  size,
  setSize,
  selectedGlitters,
  onRemoveGlitter
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
      <div>{rows}</div>
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
  );
}
