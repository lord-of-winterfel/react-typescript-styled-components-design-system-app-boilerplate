import { useState, FormEvent } from "react";
import { Button } from "../../components/Button/Button";
import { FormWrapper, Input } from "./NoteForm.styles";

interface NoteFormProps {
  onSubmit: (text: string) => void;
}

export function NoteForm({ onSubmit }: NoteFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      onSubmit(trimmed);
      setText("");
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note..."
        aria-label="Note text"
      />
      <Button type="submit" variant="primary">
        Add Note
      </Button>
    </FormWrapper>
  );
}
