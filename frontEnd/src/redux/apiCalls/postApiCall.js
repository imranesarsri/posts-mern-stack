import request from '../../utils/request'
import { postActions } from '../slices/postSlice'
import { toast } from 'react-toastify'


// Get app posts by page number
export function getAllPostsByPageNumber(pageNumber) {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`)
            dispatch(postActions.setPosts(data))
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
}

// Get posts count
export function getPostsCount() {
    return async (dispatch) => {
        try {
            const { data } = await request.get('/api/posts/count')
            dispatch(postActions.setPostsCount(data))
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
}
