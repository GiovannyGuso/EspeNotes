// Declaración de variables globales
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;
let deferredPrompt;
// Funciones
const showPostModal = () => {
  MAIN.style.display = "none"; // Oculta el contenido principal
  MODAL_POST.style.display = "block"; // Muestra el modal
  setTimeout(() => {
    MODAL_POST.style.transform = "translateY(0)"; // Animación para mostrar el modal
  }, 1);
};

const closePostModal = () => {
  MAIN.style.display = "block";
  MODAL_POST.style.transform = "translateY(100vh)"; // Oculta el modal con animación
};

window.addEventListener("beforeinstallprompt", (e) => {
  console.log("Evento por defecto anulado");
  e.preventDefault(); // Previene el comportamiento por defecto
  deferredPrompt = e; // Guarda el evento para usarlo más tarde
});

//CUANDO SE CARGA EL DOM
window.addEventListener("load", () => {
    MAIN = document.querySelector("#main");
    MODAL_POST = document.querySelector("#modal-post-section");

    // ✅ Apuntar correctamente al botón con el ícono "+"
    BTN_UPLOAD_POST = document.querySelector("#btn-upload-post");
    BTN_UPLOAD_POST.addEventListener("click", showPostModal);

    // ✅ Cerrar el modal al hacer clic en "Cancelar"
    BTN_CLOSE_POST = document.querySelector("#btn-post-cancel");
    BTN_CLOSE_POST.addEventListener("click", closePostModal);

    if(navigator.serviceWorker) {
        const res = navigator.serviceWorker.register("/sw.js");
        if (res) {
            console.log("Service Worker registrado correctamente");
        }
    }
    const bannerInstall = document.querySelector("#banner--install");
    bannerInstall.addEventListener("click", async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Muestra el prompt de instalación
            const response = await deferredPrompt.userChoice; // Espera la elección del usuario
            if (response.outcome === 'accepted') {
                console.log('Usuario aceptó la instalación de la PWA');
            } else {
                console.log('Usuario rechazó la instalación de la PWA');
            }
        }
});
});

