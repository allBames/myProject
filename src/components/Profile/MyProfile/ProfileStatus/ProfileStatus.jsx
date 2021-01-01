import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    render() {
        return <div>
            { this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} type="text"/>
            </div>
            }
            { !this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>
            }
        </div>
    }
}

export default ProfileStatus