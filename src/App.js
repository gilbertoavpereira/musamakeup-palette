import React, { useState } from "react";
import Glitters from "./modules/glitters/";
import Paletters from "./modules/paletters/";
import "./styles.css";

export default function App() {
  const [size, setSize] = useState(6);

  const [selectedGlitters, setSelectedGlitters] = useState([]);

  const handlerOnSelectGlitter = index => {
    let newSelectedGlitters = selectedGlitters.slice();

    var indexnew = newSelectedGlitters.indexOf(index);
    if (indexnew !== -1) {
      newSelectedGlitters[indexnew] = -1;
    } else {
      if (
        selectedGlitters.length === size &&
        selectedGlitters.indexOf(-1) === -1
      ) {
        return;
      }
      var indexnew1 = newSelectedGlitters.indexOf(-1);
      if (indexnew1 !== -1) {
        newSelectedGlitters[indexnew1] = index;
      } else {
        newSelectedGlitters.push(index);
      }
    }

    setSelectedGlitters(newSelectedGlitters);
    console.log(newSelectedGlitters);
  };

  const handlerOnRemoveGlitter = id => {
    let newSelectedGlitters = selectedGlitters.slice();
    var indexnew = newSelectedGlitters.indexOf(id);
    if (indexnew !== -1) {
      newSelectedGlitters[indexnew] = -1;
    }
    setSelectedGlitters(newSelectedGlitters);
  };

  const handlerOnSelectHole = newsize => {
    setSize(newsize);
    setSelectedGlitters([]);
  };

  return (
    <div className="App">
      <div class="header" />
      <Glitters
        selectedGlitters={selectedGlitters}
        onSelectGlitter={handlerOnSelectGlitter}
      />
      <Paletters
        onRemoveGlitter={handlerOnRemoveGlitter}
        selectedGlitters={selectedGlitters}
        size={size}
        setSize={handlerOnSelectHole}
      />
      <div class="footer" />
    </div>
  );
}
