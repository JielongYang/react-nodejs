function deepCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            if (src[prop] && typeof src[prop] == 'object') {
                dst[prop] = deepCopy(src[prop])
            } else {
                dst[prop] = src[prop]
            }
        }
    }
    return dst;
}

function deepCopy(src) {
    return JSON.parse(JSON.stringify(src));
}