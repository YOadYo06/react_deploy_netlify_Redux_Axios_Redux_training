import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns';


const NewPost = () => {
    const history= useNavigate();
    
    const posts = useStoreState((state) => state.posts);
    const postTitle = useStoreState((state) => state.postTitle);
    const postBody = useStoreState((state) => state.postBody);

    const savePost = useStoreActions((actions) => actions.savePost);
    const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
    const setPostBody = useStoreActions((actions) => actions.setPostBody);


    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? `${parseInt(posts[posts.length - 1].id) + 1}` : '1';
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        savePost(newPost)
        history('/')
    }

    return (
        <main className="NewPost">
            <h2>NewPost</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input id="postTitle" type="text" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
                <label htmlFor="postTitle">Post:</label>
                <textarea id="postBody"  required value={postBody} onChange={(e) => setPostBody(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost