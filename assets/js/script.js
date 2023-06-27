const input = document.querySelector('.h-form > input');
const buttonSearch = document.querySelector('.h-form > button');
const content = document.querySelector('.h-content');
const image = document.querySelector('.h-image');

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then(response => response.json())
    .then(data => {
        return data;
    })
    return result;
}

buttonSearch.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(`${input.value}`);
    content.textContent = `${JSON.stringify(result, undefined, 2)}`;
    image.src = result.image;
});
 