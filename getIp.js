function getUserIp(request) {
    return (
        request.headers["cf-connecting-ip"] || // Cloudflare
        request.headers["x-real-ip"] || // Nginx
        request.headers["x-forwarded-for"]?.split(',')[0] || // Proxy
        request.socket.remoteAddress || // Default
        ""
    );
}

module.exports = { getUserIp };
