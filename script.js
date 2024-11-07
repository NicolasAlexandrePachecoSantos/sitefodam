const videos = [
  {
    title: "Vídeo Exemplo 1",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Substitua pelo link de incorporação do vídeo
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"     // Link externo para o vídeo
  }
]; // Feche o array aqui com um colchete e ponto-e-vírgula

function loadVideos() {
  const catalog = document.getElementById("video-catalog");

  videos.forEach(video => {
    // Cria o cartão de vídeo
    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");

    // Cria o player de vídeo embutido com <iframe>
    const videoEmbed = document.createElement("iframe");
    videoEmbed.src = video.embedUrl;
    videoEmbed.classList.add("video-embed");
    videoEmbed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    videoEmbed.allowFullscreen = true;

    // Cria o título do vídeo como link
    const titleLink = document.createElement("a");
    titleLink.href = video.link;
    titleLink.target = "_blank"; // Abre o link em uma nova aba
    titleLink.classList.add("video-title");
    titleLink.textContent = video.title;

    // Adiciona o player e o título ao cartão
    videoCard.appendChild(videoEmbed);
    videoCard.appendChild(titleLink);

    // Adiciona o cartão de vídeo ao catálogo
    catalog.appendChild(videoCard);
  });
}

// Carrega os vídeos ao carregar a página
document.addEventListener("DOMContentLoaded", loadVideos);
