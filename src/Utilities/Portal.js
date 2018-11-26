import { Component } from 'react';
import ReactDOM from 'react-dom';

const portal = document.getElementById('portal');

export default class Portal extends Component { 

    constructor() {
        super();
        this.el = document.createElement('div');
    }
    

    componentDidMount() {
        portal.appendChild(this.el);
    }
    
    
    componentWillUnmount() {
        portal.removeChild(this.el);
    }
    

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal
            (children, this.el);
    }
}