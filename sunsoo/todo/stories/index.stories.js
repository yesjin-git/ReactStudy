import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

import Todo from "../src/components/Todo"

storiesOf('Todo', module)
  .add('todo', () => (
    <Todo onClick={() => {
        console.log('1234')
      }}
      text='할일'
    />
  ))
  .add('todo2', () => (
    <Todo onClick={() => {
        console.log('1234-2')
      }}
      text='할일2'
    />
  ));