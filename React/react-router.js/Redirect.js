import React from "react";
import PropTypes from "prop-types";
import warning from "warning";
import invariant from "invariant";
import { createLocation, locationsAreEqual } from "history";
import generatePath from "./generatePath";

/**
 * The public API for updating the location programmatically with a component.
 * 用一个组件自然地Update/location;
 */

class Redirect extends React.Component {
  static propTypes = {
    computedMatch: PropTypes.object, // private, from <Switch>
    push: PropTypes.bool,
    from: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
  };

  static defaultProps = {push: false};

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  isStatic() {
    return this.context.router && this.context.router.staticContext;
  }

  // will mount the Component；
  componentWillMount() {
    invariant(this.context.router, "You should not use <Redirect> outside a <Router>");
    if (this.isStatic()) this.perform();
  }
  // 已经挂载上去组件了;
  // the component have been mounted on;
  componentDidMount() {
    if (!this.isStatic()) this.perform();
  }
  // component have been updated;
  componentDidUpdate(prevProps) {
    const prevTo = createLocation(prevProps.to);
    const nextTo = createLocation(this.props.to);

    if (locationsAreEqual(prevTo, nextTo)) {
      warning(false, 'You tried to redirect to the same route you\'re currently on: ' + `"${nextTo.pathname}${nextTo.search}"`);
      return;
    }
    this.perform();
  }

  computeTo({ computedMatch, to }) {
    if (computedMatch) {
      if (typeof to === "string") {
        return generatePath(to, computedMatch.params);
      } else {
        return {...to, pathname: generatePath(to.pathname, computedMatch.params)};
      }
    }
    return to;
  }

  perform() {
    const { history } = this.context.router;
    const { push } = this.props;
    const to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  }

  render() {
    return null;
  }
}

export default Redirect;
