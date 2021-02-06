import s from './../MyPosts.module.css';
import {Component} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../../../redux/ProfileReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class Post extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        return (
            <div className={s.post}>
                <div className={s.avatar}>
                    { this.props.profile != null &&
                        <div>
                            <img src={this.props.profile.photos.small} alt=""/>
                        </div>
                    }
                </div>
                <div className={s.message}>
                    { this.props.profile != null &&
                        <div>
                            @<b>{this.props.profile.fullName}</b>
                        </div>
                    }
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile}),
    // withAuthRedirect
)
(Post)