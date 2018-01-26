import React from "react";
import PropTypes from "prop-types";
import warning from "warning";
import invariant from "invariant";
import matchPath from "./matchPath";

/**
 * The public API for rendering the first <Route> that matches.
 * 用于渲染第一个匹配的<Route>组件的公有API
 */

class Switch extends React.Component {
  // 静态变量
  static contextTypes = {router: PropTypes.shape({route: PropTypes.object.isRequired}).isRequired};
  // 静态变量
  static propTypes = {children: PropTypes.node, location: PropTypes.object};

  // 即将挂载组件
  componentWillMount() {
    invariant(this.context.router, "You should not use <Switch> outside a <Router>");
  }
  // 即将接收新的属性
  componentWillReceiveProps(nextProps) {
    warning(
      !(nextProps.location && !this.props.location),
      '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'
    );

    warning(
      !(!nextProps.location && this.props.location),
      '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'
    );
  }

  //call render() method
  render() {
    const { route } = this.context.router;
    const { children } = this.props;
    const location = this.props.location || route.location;

    let match;
    let child;

    React.Children.forEach(children, element => {
      if (match === null && React.isValidElement(element)) {
        const { path: pathProp, exact, strict, sensitive, from } = element.props;
        const path = pathProp || from;
        child = element;
        match = path ? matchPath(location.pathname, { path, exact, strict, sensitive }) : route.match;
      }
    });

    return match ? React.cloneElement(child, { location, computedMatch: match }) : null;
  }
}

export default Switch;
