import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import About from '../About';
import Films from '../Films';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

storiesOf('ReactWars', module)
  .add('About', withInfo({
    text: 'Main docs for this component can we specified here', 
  })(() => <About />))
  .add('Films', withInfo()(() => <Films />));
