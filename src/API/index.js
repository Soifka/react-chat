export const getData = () => {
    return fetch('https://dummyjson.com/comments')
    .then(response => response.json())
}