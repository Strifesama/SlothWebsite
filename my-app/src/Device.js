import React, {PropTypes, Component} from 'react';
import { IPhone, Android, IPad, MacBook, AppleWatch } from 'react-devices';

export default class Device extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <IPhone
                    model="iphone6"
                    color="silver"
                    landscape
                />
                <Android
                    model="s5"
                    color="white"
                />
                <IPad
                    model="ipad"
                    color="silver"
                    landscape
                />
                <MacBook model="macbook" />
                <AppleWatch color="rose-gold" small/>
            </div>
        );
    }
};