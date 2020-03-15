import React from "react";
import className from "classnames";

import { glitters } from "../../data";

export default function Glitters({ selectedGlitters, onSelectGlitter }) {
  return (
    <div>
      {glitters.map((glitter, index) => (
        <>
          <button onClick={() => onSelectGlitter(index)}>
            <div class="image-container">
              <img key={index} src={glitter.src} alt={glitter.title} />
              <div
                class={className("after", {
                  over: selectedGlitters.includes(index)
                })}
              >
                {selectedGlitters.includes(index) && "added"}
              </div>
              ;
            </div>
            <h4>{glitter.title}</h4>
          </button>
        </>
      ))}
    </div>
  );
}
