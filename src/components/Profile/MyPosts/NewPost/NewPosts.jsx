import s from './NewPosts.module.css';

function NewPosts() {
    return (
            <div className={s.newPost}>
                Новый пост:
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </div>
    );
}

export default NewPosts;