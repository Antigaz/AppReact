import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faQuestionCircle);

export default class Sondage extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div>
                <button type="button" id="Popover2" className="btn btn-warning pj">
                    <FontAwesomeIcon icon="question-circle" />&nbsp;Sondage
                </button>
                <UncontrolledPopover trigger="focus" placement="bottom" target="Popover2">
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                </UncontrolledPopover>
            </div>
        );
    }
}