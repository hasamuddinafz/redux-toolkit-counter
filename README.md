## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## Installing Redux Toolkit (RTK)

To install Redux Toolkit and React Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

## What is Redux / Redux Toolkit (RTK)?

Inside a component, we usually use `useState()` to manage state.

When we need to share state between multiple components:

- We pass data from **parent to child** using props
- Then the child sends it again to another child
  This becomes **props drilling**

As the project grows, this becomes a problem.

Examples of data needed everywhere:

Login information (`user / token`)

Language (`TR / EN`)

Theme, modal, notifications, etc.

When props are no longer enough, we need **Global State Management**.

That’s where **Redux Toolkit (RTK)** comes in.

Redux helps us keep important application data in **one central place**.

This central place is called the **Store**.

## What is the Store?

- The **store** is like the **RAM of the application**.
- All global state is stored here
- Every part of the app can access it

### Single Source of Truth

Redux has an important rule:

**All global state should live in one place → the store.**

## What is a Slice?

A **slice** is a part of the store.

Think of a slice as a **mini package** for each feature:

- `counterSlice`
- `authSlice`
- `themeSlice`
- `languageSlice`

A slice includes **3 main things**:

### 1) Initial State

The starting data:

```jsx
initialState: {
  value: 0;
}
```

### 2) Reducers

Functions that describe **how state changes**.

### 3) Actions

Commands generated automatically to trigger reducers.

Important note:

**The reducer name and action name are the same.**

Example: `increment` reducer → `increment()` action.

## What is Dispatch?

`dispatch` means: **sending a command** to the store.

Example:

```jsx
dispatch(increment());
```

What happens here?

1. `increment()` creates an **action object**
2. `dispatch` sends this action to the **store**
3. The store finds the related **reducer**
4. The reducer updates the **state**
5. React detects the change and **re-renders the UI**

## What is useSelector?

`useSelector` means: **reading data from the store**.

Example:

```jsx
const count = useSelector((state) => state.counter.value);
```

This means:

Go to the store

Access the `counter` slice

Read the `value` state

## Redux Data Flow (Cycle)

Redux follows a predictable flow:

UI event (button click)

`dispatch(action)`

Store receives action

Reducer updates state

UI re-renders automatically

Example:

Button click → `dispatch(increment())` → reducer updates state → UI shows new count

## Project Features

- Increment / Decrement counter
- Reset counter
- Increase by custom amount
- Decrease by custom amount
- Clean modern UI design

## Tech Stack

- React
- Redux Toolkit
- React Redux
- CSS (Modern UI)

## Notes

This project was created as a practice example to learn and demonstrate the **Redux Toolkit fundamentals**.

To save time, the UI/UX styling was assisted by **ChatGPT**, allowing me to focus on Redux Toolkit logic and state management.
