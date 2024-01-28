import {useParams} from 'react-router-dom'
 const User = () => {
    const {userID} = useParams()
    return(
        <div className="bg-gray-300 p-4" >
           <h2 className="text-gray-700 p-4 text-3xl" >My Followers : {userID} </h2>
        </div>
    )
}

export default User;