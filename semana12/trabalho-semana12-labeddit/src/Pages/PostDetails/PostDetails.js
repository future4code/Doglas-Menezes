import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Service/BaseUrl'
import useDetails from '../../Hooks/useDetails'

const PostDetails=()=>{
const params=useParams()

const post=useDetails([],`${BASE_URL}/posts/${params.id}/comments`)
console.log(post)
  return(
<div>

</div>
  )
}
export default PostDetails