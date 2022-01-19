import { useState } from "react";
import { useToast } from "./Toaster/hooks";

// Simple form to test our Toaster
const Form = () => {
  const { triggerToast } = useToast();

  const [type, setType] = useState("success");
  const [message, setMessage] = useState("Who wants some toasts today?");
  const [duration, setDuration] = useState();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    triggerToast({
      type,
      message,
      duration: parseInt(duration, 10) * 1000 || undefined, // Sanitize duration input
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select the type of notification:
        <select value={type} onChange={handleTypeChange}>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="danger">danger</option>
        </select>
      </label>

      <br />
      <br />
      <label>
        Enter the duration in seconds (optional):
        <input onChange={handleDurationChange} min="1" type="number" />
      </label>

      <br />
      <br />
      <label>
        Enter the notification text:
        <br />
        <textarea value={message} onChange={handleMessageChange} />
      </label>

      <br />

      <input type="submit" value="Toast it" />
    </form>
  );
};

export default Form;
