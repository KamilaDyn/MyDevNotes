import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module)
  .add('Normal', () => <Card />)
  .add('Secondary', () => <Card cardType="devarticle" />)
  .add('Tertiary', () => <Card cardType="devproject" />);
