import React from 'react';
import { renderScene } from './renderScene';

export class ThreeCanvas extends React.Component {
  ref = React.createRef<HTMLDivElement>();

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    renderScene(this.ref.current!);
  }

  render() {
    return <div ref={this.ref} />;
  }
}
