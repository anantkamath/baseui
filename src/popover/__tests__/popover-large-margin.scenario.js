/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {Button} from '../../button/index.js';
import {Popover} from '../index.js';

export default function Scenario() {
  return (
    <Popover
      accessibilityType={'tooltip'}
      isOpen
      content={<div>content</div>}
      popoverMargin={30}
    >
      <Button>Open</Button>
    </Popover>
  );
}
