const share_media = document.querySelector(".bottom-container");

let open = false;

function share() {
    open = !open;
    if(open) {
        share_media.classList.remove("off");
        share_media.classList.add("on");
    }
    else {
        share_media.classList.add("off");
        share_media.classList.remove("on");
    }
}