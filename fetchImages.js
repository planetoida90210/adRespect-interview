const API_KEY = 'tKLb56ihzyn4j-oI88207OAlnuSTbAMjC20gyqSdZT0';

export async function fetchImages(
    query = 'japanese modern garden design',
    count = 8,
) {
    const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&query=${query}&count=${count}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.map((img) => img.urls.regular);
}
