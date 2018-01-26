import warning from "warning";
import invariant from "invariant";
import React from "react";
import PropTypes from "prop-types";

/**
 * The public API for putting history on context.
 * 把history放置于context的公共API
 */

class Router extends React.Component {
  static propTypes = { history: PropTypes.object.isRequired, children: PropTypes.node };
  static contextTypes = { router: PropTypes.object };
  static childContextTypes = { router: PropTypes.object.isRequired };

  getChildContext() {
    return {
      router: {...this.context.router, history: this.props.history, route: {location: this.props.history.location, match: this.state.match}}
    };
  }

  state = {
    match: this.computeMatch(this.props.history.location.pathname)
  };

  computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  }

  //组件即将挂载的时候：生命周期：
  componentWillMount() {
    const { children, history } = this.props;
    invariant(children === null || React.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(() => {
      this.setState({
        match: this.computeMatch(history.location.pathname)
      });
    });
  }

  // 【生命周期】接收新的属性
  componentWillReceiveProps(nextProps) {
    warning(this.props.history === nextProps.history, "You cannot change <Router history>");
  }
  // 卸载组件的时候，不再监听
  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}

export default Router;
