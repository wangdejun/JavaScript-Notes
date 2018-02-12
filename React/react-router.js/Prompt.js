import React from "react";
import PropTypes from "prop-types";
import invariant from "invariant";

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 * Subclass;
 * 公共API
 */

class Prompt extends React.Component {
  static propTypes = {
    when: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired
  };

  static defaultProps = {when: true};

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({block: PropTypes.func.isRequired}).isRequired
    }).isRequired
  };

  enable(message) {
    if (this.unblock) this.unblock();
    this.unblock = this.context.router.history.block(message);
  }

  disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  }
// 【生命周期】：组件即将挂载
  componentWillMount() {
    invariant(this.context.router, 'You should not use <Prompt> outside a <Router>');

    if (this.props.when) this.enable(this.props.message);
  }

// 【生命周期】组件将接受下一个props
  componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message)
        this.enable(nextProps.message);
    } else {
      this.disable();
    }
  }
// [before the component will be unmounted]
  componentWillUnmount() {
    this.disable();
  }

  render() {
    return null;
  }
}

export default Prompt;

