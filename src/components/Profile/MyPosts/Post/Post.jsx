import s from './../MyPosts.module.css';

function Post(props) {
    return (
        <div className={s.post}>
                <div className={s.avatar}>
                    <img src={'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'}/>
                </div>
                <div className={s.message}>
                    <div>
                        {props.message}
                    </div>
                    <div>
                        Like: {props.like}
                    </div>
                </div>
        </div>
    );
}

export default Post;