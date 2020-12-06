import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.post}>
            <div>
                {props.message}
            </div>
            <div>
                Like: {props.like}
            </div>
        </div>
    );
}

export default Post;