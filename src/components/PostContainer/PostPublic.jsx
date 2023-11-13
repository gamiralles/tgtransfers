import Post from "./Post";

const PostPublic = ({spot}) => {
    return (
        <div>
            {spot.map((pst) => {
                return <Post key={pst.id}{...pst}/>
            })}
        </div>
    )
}

export default PostPublic;