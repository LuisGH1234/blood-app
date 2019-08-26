export function isMobile() {
    const { userAgent: uA } = navigator;
    if (uA.match(/Android/i)
        || uA.match(/webOS/i)
        || uA.match(/iPhone/i)
        // || uA.match(/iPad/i)
        || uA.match(/iPod/i)
        || uA.match(/BlackBerry/i)
        || uA.match(/Windows Phone/i))
        return true;
    return false;
}