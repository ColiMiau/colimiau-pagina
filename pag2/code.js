const videos = document.querySelector(".videos");

document.addEventListener("DOMContentLoaded", () => {
  const videosOrdenados = [...misVideos].sort((a, b) => {
    return (
      new Date(b.fecha.split("-").reverse().join("-")) -
      new Date(a.fecha.split("-").reverse().join("-"))
    );
  });
  const inicio = 4;
  const fin = 8;

  videosOrdenados.slice(inicio, fin).forEach((video) => {
    const miniatura = document.createElement("div");
    const titulo = document.createElement("div");
    const imagen = document.createElement("img");
    const enlace = document.createElement("a");
    const adelanto = document.createElement("img");

    enlace.href = video.enlace;

    enlace.appendChild(adelanto);
    enlace.appendChild(imagen);
    miniatura.appendChild(enlace);

    imagen.src = video.imagen;
    imagen.alt = video.titulo;

    adelanto.src = video.adelanto;
    adelanto.style.display = "none";

    titulo.textContent = video.titulo;
    enlace.target = "_blank";

    videos.appendChild(miniatura);
    videos.appendChild(titulo);

    miniatura.addEventListener("mouseenter", () => {
      if (miniatura.hoverTimeout) {
        clearTimeout(miniatura.hoverTimeout);
      }
      miniatura.hoverTimeout = setTimeout(() => {
        imagen.style.display = "none";
        adelanto.style.display = "block";
      }, 500);
    });
    miniatura.addEventListener("mouseleave", () => {
      if (miniatura.hoverTimeout) {
        clearTimeout(miniatura.hoverTimeout);
      }
      adelanto.style.display = "none";
      imagen.style.display = "block";
    });
  });
});
