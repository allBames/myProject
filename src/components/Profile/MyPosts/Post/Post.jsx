import s from './../MyPosts.module.css';
import {Component} from "react";

class Post extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps != this.props || nextState != this.state
    }

    render() {
        console.log("POST")
        return (
            <div className={s.post}>
                <div className={s.avatar}>
                    <img src={'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'}/>
                </div>
                <div className={s.message}>
                    <div>
                        {this.props.message}
                    </div>
                    <div>
                        Like: {this.props.like}
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;