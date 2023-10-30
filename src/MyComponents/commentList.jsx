import SingleComment from "./SingleComment"

export default function CommentList({allComment, asin, setAllComment, setLoading}) {
    
    return (
        <>
                {allComment.map((comment, i) => (
                    <SingleComment setAllComment={setAllComment} setLoading={setLoading} commmentText={comment.comment} commentRate={comment.rate} key={i} commentId={comment._id} asin={asin}/>
                ))}
          </>  
    )
}