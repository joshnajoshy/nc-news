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

const updateUserVote = (article_id, votes) => {
return api.patch(`/articles/${article_id}`, {inc_votes: votes}).then(({data}) => {
    return data.updatedArticle
})
}

const postComment = (article_id, formData) => {
    return api.post(`/articles/${article_id}/comments`, formData).then((response) => {
        return response.data;
    })
}

const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`).then(() => {
        console.log(`deleted post with comment id ${comment_id}`)
    })
}

const getAllTopics = () => {
    return api.get(`/topics`).then(({data}) => {
        return data.topics
    })
}

const getArticlesByTopic = (topic) => {
    return api.get(`/articles?topic=${topic}`).then(({data}) => {
        return data.articles
    })
}

const filterArticles = (sort_by, order) => {
    return api.get(`/articles?sort_by=${sort_by}&order=${order}`).then(({data}) => {
        return data.articles
    })
}

export {getArticles, getSingleArticle, getComments, updateUserVote, postComment, deleteComment, getAllTopics, getArticlesByTopic, filterArticles};