import Glide from "@glidejs/glide";

export function glideInit(selector, options = {}) {
    const defaultOptions = {
        type: 'carousel',
        perView: 1,
    };

    // Merge default options with user-provided options
    const glideOptions = { ...defaultOptions, ...options };
    const glide = new Glide(selector, glideOptions);

    glide.mount();
}