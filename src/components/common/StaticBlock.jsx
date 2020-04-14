import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Renders static text received from a query. Supports markdown
 * Props:
 * query - query string to fetch information
 */
class StaticBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {info: "# What is it?\r\nX5 Smart Contract Viewer is a place where you can “bookmark” certain Ethereum smart contracts and then watch for their properties and events or call functions in a user-friendly manner.\r\n\r\n\r\nX5 Smart Contract Viewer was designed for Ethereum developers in the first place. But anybody can make use of it.\r\n\r\n\r\nX5 Smart Contract Viewer is a front-end tool. All the data including your contracts' addresses and their ABI is stored in the web browser's local storage.\r\n\r\n\r\nX5 Smart Contract Viewer is an open-source project. Our repository is [here](https://github.com/x5engine/justsmartcontracts), feel free to study it and join us."}
        this.sendQuery = this.sendQuery.bind(this);
    }

    componentDidMount() {
        // this.sendQuery();
    }

    sendQuery() {
        fetch(this.props.query)
        .then(res => res.json())
        .then(res => this.setState({info: res.text}));
    }

    render() {
        return (
            <div>
                <ReactMarkdown source={this.state.info} />
            </div>
        )
    }
}

export default StaticBlock;
