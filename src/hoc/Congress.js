import React, { Component, Fragment } from 'react'
import CM from "./VotingPoll"
class Congress extends Component {

    render() {
        return (
            <Fragment>
                <h5>Congress {this.props.voteFor} Candidate:{this.props.name}</h5>
                <h5 onMouseOver={this.props.hocVoteHandler}>Total Vote:{this.props.hocVoteCount}</h5>
            </Fragment>
        )
    }
}
export default CM(Congress, 5)