import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-api-579d.onrender.com/api",
});

const getArticles = () => {
    return api.get("/articles").then(({data}) => {
        return data.articles;
    })
}

export {getArticles};