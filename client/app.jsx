import React from 'react';
import {observer} from 'mobx-react';

import { Button } from 'office-ui-fabric-react/lib/Button';

@observer
export default class Application extends React.Component {
    static propTypes = {
        bank: React.PropTypes.object.isRequired,
    }

    render() {
        return (
          <Button onClick={() => { this.props.bank.add() }}>Hello {this.props.bank.name}</Button>
        );
    }
}
