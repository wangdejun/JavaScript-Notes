/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {Fiber} from 'react-reconciler/src/ReactFiber';

/**
 * Keeps track of the current owner.
 * 追踪当前拥有者。
 * The current owner is the component who should own any components that are currently being constructed.
 * 
 */
const ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: (null: null | Fiber),
};

export default ReactCurrentOwner;