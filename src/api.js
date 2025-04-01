import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-api-579d.onrender.com/api",
});

const getArticles = () => {
    return api.get("/articles").then(({data}) => {
        return data.articles;
    })
}

const getSingleArticle = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({data}) => {
        return data.article;
    })
}

const getComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments
    })
}

export {getArticles, getSingleArticle, getComments};