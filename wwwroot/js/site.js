let movies = [
    {
        Name: "Lorem",
        Topic: "Lorem",
        Category: "Lorem",
        Rate: 5,
        ImgUrl: "https://itc.ua/wp-content/uploads/2024/05/Deadpool-1.jpg"
    },
    {
        Name: "Lorem",
        Topic: "Lorem",
        Category: "Lorem",
        Rate: 10,
        ImgUrl: "https://itc.ua/wp-content/uplsoads/2024/05/Deadpool-1.jpg"
    },
    {
        Name: "Lorem",
        Topic: "Lorem",
        Category: "Lorem",
        Rate: 7,
        ImgUrl: "https://itc.ua/wp-content/uploads/2024/05/Deadpool-1.jpg"
    }
];

for (let movie of movies) {
    filmList.innerHTML += `
    <tr>
        <td>${movie.Name}</td>
        <td>${movie.Topic}</td>
        <td>${movie.Category}</td>
        <td>${movie.Rate}</td>
        <td><a href="${movie.ImgUrl}" target="_blank">link</a></td>
    </tr>`;
}

filmForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(filmForm);
    let formObject = Object.fromEntries(formData);
    addFilm(formObject);
    filmForm.reset();
}

function addFilm(film) {
    movies.push(film);
    filmList.innerHTML += `
    <tr>
        <td>${film.Name}</td>
        <td>${film.Topic}</td>
        <td>${film.Category}</td>
        <td>${film.Rate}</td>
        <td><a href="${film.ImgUrl}">Link</a></td>
    </tr>`;
}
