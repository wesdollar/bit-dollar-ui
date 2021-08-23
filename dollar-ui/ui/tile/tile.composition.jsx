import React from 'react';
import { Tile } from './tile';
import {ViewContainer} from "@wesdollar/dollar-ui.ui.view-container";
import { Text } from '@wesdollar/dollar-ui.text.text';

export const BasicTile = () => (
  <ViewContainer>
    <Tile>
      <Text>Hello World</Text>
    </Tile>
  </ViewContainer>
);
