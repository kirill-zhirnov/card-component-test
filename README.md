# Card Component

## Case result for the Interview and examples:

[CodeSandbox](https://codesandbox.io/p/sandbox/card-components-example-4xyqsl?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cltzij2a200062e6aplgpp7g9%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cltzij2a200022e6a4z43vq2j%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cltzij2a200032e6avep4950v%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cltzij2a200052e6aihcaf07v%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B56.356291522529986%252C43.643708477470014%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cltzij2a200022e6a4z43vq2j%2522%253A%257B%2522id%2522%253A%2522cltzij2a200022e6a4z43vq2j%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522cltzij2a200052e6aihcaf07v%2522%253A%257B%2522id%2522%253A%2522cltzij2a200052e6aihcaf07v%2522%252C%2522activeTabId%2522%253A%2522cltziomwe007f2e6awwjcvvp2%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522cltziomwe007f2e6awwjcvvp2%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522cltzij2a200032e6avep4950v%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cltzij2a200032e6avep4950v%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

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