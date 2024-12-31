document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".roadmap-item");
    const popup = document.createElement("div");
    let currentIndex = 0;

    // Contenido dinámico para las prácticas
    const contentData = [
        { 
            title: "Práctica 1", 
            content: "<img src='assets/images/pollo_unipata.jpg' alt='Práctica 1' />" 
        },
        { 
            title: "Práctica 3", 
            content: "<iframe src='data/PRECIPITACIONES_Y_TEMPERATURA.pdf' style='width: 100%; height: calc(100% - 50px); border: none;'></iframe>" 
        },
        { title: "Práctica 4", content: "Mapa interactivo de zonas válidas (WebMap)." },
        { title: "Práctica 5", content: "Mapa de severidad en formato GeoTIFF/PNG." },
        { title: "Práctica 7", content: "Gráfico de rendimiento y tabla en HTML." },
        { title: "Práctica 8", content: "Mapas interactivos de contenedores y accidentes." },
        { title: "Práctica 9", content: "Imágenes GeoTIFF calculadas (SAVI y EVI)." },
        { title: "Práctica 10", content: "GeoTIFF calculados exportados y visualizados." }
    ];

    // Estructura del popup
    popup.className = "popup";
    popup.innerHTML = `
        <button class="close-btn" id="close-btn">&times;</button>
        <div class="arrow" id="prev">&#8592;</div>
        <div class="content" id="popup-content"></div>
        <div class="arrow" id="next">&#8594;</div>
    `;
    document.body.appendChild(popup);

    // Actualiza el contenido del popup según la práctica seleccionada
    const updatePopupContent = (index) => {
        const content = document.getElementById("popup-content");
        content.innerHTML = `
            <h3 style="text-align: center; margin-bottom: 10px;">${contentData[index].title}</h3>
            ${contentData[index].content}
        `;
    };

    // Muestra el popup para la práctica seleccionada
    const showPopup = (index) => {
        currentIndex = index;
        updatePopupContent(index);
        popup.classList.add("popup-active");
    };

    // Maneja el clic en los círculos del roadmap
    items.forEach((item, index) => {
        item.addEventListener("click", () => showPopup(index));
    });

    // Navegación con flechas
    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + contentData.length) % contentData.length;
        updatePopupContent(currentIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % contentData.length;
        updatePopupContent(currentIndex);
    });

    // Cierra el popup cuando se hace clic en el botón de cerrar
    document.getElementById("close-btn").addEventListener("click", () => {
        popup.classList.remove("popup-active");
    });

    // También cierra el popup si se hace clic fuera del contenido
    popup.addEventListener("click", (e) => {
        if (!e.target.classList.contains("arrow") && !e.target.closest(".content") && e.target.id !== "close-btn") {
            popup.classList.remove("popup-active");
        }
    });
});
