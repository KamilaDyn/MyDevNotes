import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'hsl(62, 91%, 87%)',
      Secondary: '	hsl(34, 80%, 82%)',
      Tertiary: 'hsl(115, 72%, 87%)',
    };
    const defaultValue = 'hsl(62, 91%, 87%)';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Hello World</Button>;
  })
  .add('Secondary', () => <Button secondary>Hello World</Button>)
  .add('Tertiary', () => <Button tertiary>Hello World</Button>);
