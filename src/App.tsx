import { useState } from "react";

export default function App() {
  const [variant, setVariant] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log({ variant, text });
    // triggerToast(variant,text)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select the type of notification:
        <select value={variant} onChange={(e) => setVariant(e.target.value)}>
          <option value="warning">warning</option>
          <option value="success">success</option>
          <option value="danger">danger</option>
        </select>
      </label>

      <br />
      <label>
        Enter the notification text:
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>

      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}
