# Card Component

## Installation

`yarn add git+https://github.com/kirill-zhirnov/card-component-test.git`

## Getting started

Create a card component:

```
import {Card} from 'card-component';

const component = new Card({
	header: 'Hello Block 1',
	main: 'some content',
	headerStyles: 'color: red'
});
```

Append component to a DOM element:

```
component1.appendTo(document.getElementById('your-container'));
```

## Working with Events

Listen for all events related to a Card:

```
component1.on('click', (e) => console.log('clicked!', e));
```

Listen events on children elements:

```
const component = new Card({
	main: '<button class="to-red">To Red</button> - <button class="to-green">To Green</button>'
});

component.on('click', '.to-red', () => console.log('to red'));
component.on('click', '.to-green', () => console.log('to green'));

```

## Data reactivity

The data's properties can be mutated which cause to re-render:

```
component.data.header = 'the new value';
```