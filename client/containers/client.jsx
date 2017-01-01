import React from 'react';
import {observer} from 'mobx-react';

import {
    Persona,
} from '../../node_modules/office-ui-fabric-react/lib/index';

@observer
export default class Client extends React.Component {
    static propTypes = {
        client: React.PropTypes.object.isRequired,
    }

    render() {
        return (
            <Persona
                imageUrl={this.props.client.image}
                imageInitials={this.props.client.initials}
                primaryText={this.props.client.name}
                secondaryText={this.props.client.count}
            />
        );
    }
}
