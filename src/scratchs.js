function ScratchGlitters() {
  //[REF] https://withlovecosmetics.co/pages/build-your-own
  const erros = [];
  const glitters = [];
  for (var elemennt of document.getElementsByClassName("product-card")) {
    try {
      var img = elemennt.getElementsByClassName("grid-view-item__image")[0];
      var title = elemennt.getElementsByClassName("grid-view-item__title")[0];
      glitters.push({ src: img.src, title: title.innerText });
    } catch (e) {
      erros.push({ e: e, element: elemennt });
      console.warn(e, elemennt);
    }
  }
  return { erros, data: { glitters } };
}
console.log(JSON.stringify(ScratchGlitters(), null, 4));
