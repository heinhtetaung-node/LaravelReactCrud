import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import BaseModel from './BaseModel';

class BaseComponent extends Component {
    constructor(props){
        super(props);
        this.model = new BaseModel();
    }
}
export default BaseComponent;

