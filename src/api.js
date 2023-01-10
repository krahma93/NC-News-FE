import axios from 'axios'

const marketApi = axios.create({
    baseURL: 'https://kr-news-portfolio.onrender.com/api'
})

export const getArticles = ( )=> {
    return marketApi.get('/articles').then((res) => {
        return res.data.articles
    })
}
