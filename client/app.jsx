import React from 'react';
import { observer } from 'mobx-react';

import {
    Button
} from '../node_modules/office-ui-fabric-react/lib/index';

import Client from './containers/client.jsx';

@observer
export default class Application extends React.Component {
    static propTypes = {
        bank: React.PropTypes.object.isRequired,
    }

    render() {
        return (
            <div>
                {this.props.client.primaryText}
                <Client client={this.props.client} />
                <Button onClick={() => { this.props.bank.add() }}>Hello {this.props.bank.name}</Button>
            </div>
        );
    }
}
