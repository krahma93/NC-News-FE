import axios from 'axios'

const marketApi = axios.create({
    baseURL: 'https://kr-news-portfolio.onrender.com/api'
})

export const getArticles = (slug )=> {
    if (slug) { return marketApi.get(`/articles?topic=${slug}`).then((res)=> 
    {
        return res.data.articles
    })} else {
    return marketApi.get('/articles').then((res) => {
        return res.data.articles
    })
}
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

export const patchUpVote = (article_id, increment) => {
    return marketApi.patch(`/articles/${article_id}`, {
        inc_votes: increment,
    })
    
}

export const postComment = (article_id, comment) => { 
    console.log(article_id)
   
    return marketApi.post(`/articles/${article_id}/comments`, comment).then((res) => {
        return res.data.comment
    })
}

export const getTopics = () => {
    return marketApi.get('/topics').then(res => {
        return res.data.topics
    })
};

// export const getSingleTopic = (slug) => {
//     return marketApi.get(`/articles?topic=${slug}`).then((res)=> 
//     {
//         return res.data.articles
//     })
// }