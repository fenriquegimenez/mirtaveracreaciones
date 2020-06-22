const container = document.getElementsByClassName("container"),
  verMasBtn = document.getElementById("verMasBtn");

const imagen = () => {
  for (let i = 1; i < 57; i++) {
    return i;
  }
};

const crearImagen = () => {
  document.createElement("img");
  crearImagen.src = `../images/${imagen()}.jpg`;
  container.append(crearImagen());
};
