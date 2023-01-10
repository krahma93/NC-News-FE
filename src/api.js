import axios from 'axios'

const marketApi = axios.create({
    baseURL: 'https://kr-news-portfolio.onrender.com/api'
})

export const getArticles = ( )=> {
    return marketApi.get('/articles').then((res) => {
        return res.data.articles
    })
}

export const getSingleArticle = (article_id) => {
    return marketApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article
    })
}

export const getComments = (article_id) => {
    return marketApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data.comments
    })
}