import warning from "warning";
import invariant from "invariant";
import React from "react";
import PropTypes from "prop-types";
import { createPath, parsePath } from "history";
import Router from "./Router";
/**
 * -------------------
 * 定义了many的工具函数
 * normalizeLocation()
 * addLeadingSlash()
 * addBasename()
 * stripBasename()
 * createLocation()
 * creatURL();
 * staticHandler();
 * noop()//不做任何事情
 */
const normalizeLocation = object => {
  // spreading assignment
  const { pathname = "/", search = "", hash = "" } = object;
  return {pathname, search: search === '?' ? '' : search, hash: hash === '#' ? '' : hash};
};
  // 三元运算符巧妙实现"添加/"这个动作
const addLeadingSlash = path => {return path.charAt(0) === "/" ? path : "/" + path;};

const addBasename = (basename, location) => {
  // 如果basename为空，那么直接返回location
  if (!basename) return location;

  return {...location, pathname: addLeadingSlash(basename) + location.pathname};
};

const stripBasename = (basename, location) => {
  if (!basename) return location;

  const base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;

  return {...location, pathname: location.pathname.substr(base.length)};
};

const createLocation = location => typeof location === 'string' ? parsePath(location) : normalizeLocation(location);
const createURL = location => typeof location === 'string' ? location : createPath(location);
const staticHandler = methodName => () => { invariant(false, 'You cannot %s with <StaticRouter>', methodName);};
const noop = () => {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 * 静态的<Route>
 * 只是在上下文对象中记录location的变化，而没有真正地改变当前的location
 * 主要在服务端渲染和测试环境下适用；
 */

class StaticRouter extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    context: PropTypes.object.isRequired,
    location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };

  static defaultProps = {
    basename: "",
    location: "/"
  };

  static childContextTypes = {
    router: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  }

  createHref = path => addLeadingSlash(this.props.basename + createURL(path));

  handlePush = location => {
    const { basename, context } = this.props;
    context.action = "PUSH";
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  handleReplace = location => {
    const { basename, context } = this.props;
    context.action = "REPLACE";
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  handleListen = () => noop;

  handleBlock = () => noop;

  componentWillMount() {
    warning(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.");
  }

  render() {
    const { basename, context, location, ...props } = this.props;

    const history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return <Router {...props} history={history} />;
  }
}

export default StaticRouter;

