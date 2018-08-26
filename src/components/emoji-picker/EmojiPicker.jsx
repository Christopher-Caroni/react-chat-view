import React, { Component } from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import '../../styles/emojiPicker.css';

class EmojiPicker extends Component {
    componentDidMount() {
        const elem = this.domNode;
        elem.style.opacity = 0;
        window.requestAnimationFrame(() => {
            elem.style.transition = 'opacity 350ms';
            elem.style.opacity = 1;
        });
        this.domNode.focus();
    }

    onSelect = () => {};

    render() {
        return (
            <div
                tabIndex="0"
                onBlur={this.props.onBlur}
                className="sc-emoji-picker"
                ref={e => {
                    this.domNode = e;
                }}
            >
                <Picker onSelect={this.onSelect} set="apple" />
            </div>
        );
    }
}

export default EmojiPicker;