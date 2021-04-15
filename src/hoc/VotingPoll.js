import React, { Component } from "react";

const CM = (Party, vote) => {
    class NewCm extends Component {
        state = {
            voteCount: 0,
        };
        voteHandler = () => {
            this.setState({
                voteCount: this.state.voteCount + vote,
            });
        };
        render() {
            return <Party voteFor="CM"
                {...this.props}
                hocVoteCount={this.state.voteCount}
                hocVoteHandler={this.voteHandler}
            />;
        }
    }
    return NewCm;
};
export default CM;
