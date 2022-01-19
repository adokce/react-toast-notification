# react-toast-notification

[![Edit react-typescript](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/adokce/react-toast-notification)

## Usage

### Wrap your application with Toaster

If you want to send toasts from anywhere in the application, you need to first wrap your application with it.
Inside, we use context and custom hooks to allow triggering new toasts.

```js
import Toaster from "./Toaster";

const App = () => {
  return <Toaster>...</Toaster>;
};
```

### useToast anywhere in the application

If you want to send toasts from anywhere in the application, you need to first wrap your application with it.
Inside, we use context and custom hooks to allow triggering new toasts.

`type` accepts `success`, `warning` and `danger`.

Pass any `message`, it will work fine with one line but also adapt with height for longer messages.

If you do not specify `duration`, it will default to 6 seconds (6000ms).

```js
import { useToast } from "./Toaster/hooks";

const MyComponent = () => {
  const { triggerToast } = useToast();

  const handleSubmit = async () => {
    // ...some async code

    triggerToast({
      type: "success",
      message: "Form updated successfully",
      duration: 5000,
    });
  };
};
```

You can see usage example in `Form` component, which is shown when you run the application in this repo

To see the example, run `npm i` and `npm start` from the terminal or use the [codesandbox](https://codesandbox.io/s/github/adokce/react-toast-notification) to see it immidiately in your browser.

## Internals

State is stored in context `ToasterContext`, which is abstracted away with `toastReducer` via custom hooks: `useToast`
and `useToastInternal`.

`useToast` is for usage inside the application logic, as explained above in the usage example.

`useToastInternal`, however provides a list, `notifications` and a `closeToast` which are used inside the `Toasts` component, where the React Portal is created to host our toasts. These two drive the toasts rendering and closing logic. Lastly, there is `Toast` component, which is the UI implementation of a toast notification.

`Toast` and it's parent, `Toasts` are styled with styled-components library and their styles live in the same folder with `styles.js` name.

![Example App Screenshot](./screenshot.png)
