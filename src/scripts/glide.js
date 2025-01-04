import Glide from "@glidejs/glide";

export function glideInit() {
    new Glide('.glide').mount({
        type: 'carousel',
        perView: 1,
        gap: 10,
    });
}