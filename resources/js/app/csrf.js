export default function CookieCsrf () {
    let xsrf_token = null;
    document.cookie.split(";").forEach(cookie => {
        const [key, value] = cookie.split("=");
        if(key.trim() == 'XSRF-TOKEN') {
            xsrf_token = decodeURIComponent(value);
        }
    })
    return xsrf_token;
}