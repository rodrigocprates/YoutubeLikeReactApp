# ReduxSimpleStarter

A fully implemented version of React Udemy's course (https://www.udemy.com/react-redux/) to better understand React concepts.

###Few points for reference###

It's always a good practice to write your components in separated files - as long as your app grows, it will get easier to support it.

State x Props
- Whenever your component state changes it will recall render() function;
- Props are only.. properties (but can also be used by passing callback functions).

Importing
- Importing libraries (through NPM) - give it's own name (you can check at NPM_MODULES folder);
- Import your components - write down the path that it comes from.

Class based components x Function components
- Class based are used when you mostly need to set a STATE;
- Function components are used when you need a simpler behaviour.

###How to run###
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:rodrigocprates/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```
