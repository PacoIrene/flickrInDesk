import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classNames';
import MyEditor from './MyEditor';


export default class Home extends Component {
  render() {
    const mainElement = this.props.host.host === '' ? (<div></div>)
        : (<MyEditor host={this.props.host} changeHost={this.props.changeHost}></MyEditor>);
    const {editable} = this.props.host;
    return (
      <div className={'container ' + classNames({'container-editorable': editable})}>
          {mainElement}
      </div>
    );
  }
}
