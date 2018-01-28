const ReactDebugCurrentFrame = {};

if (__DEV__) {
  // Component that is being worked on
  // 当前工作的组件
  ReactDebugCurrentFrame.getCurrentStack = (null: null | (() => string | null));

  ReactDebugCurrentFrame.getStackAddendum = function(): string | null {
    const impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

export default ReactDebugCurrentFrame;
