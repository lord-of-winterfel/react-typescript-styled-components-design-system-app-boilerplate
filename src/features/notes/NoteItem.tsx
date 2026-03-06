import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import type { Note } from "../../types/note";
import { StyledNoteItem } from "./NoteItem.styles";

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

export function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <StyledNoteItem>
      <Card>
        <Card.Header>
          <Button variant="secondary" onClick={() => onDelete(note.id)}>
            Delete
          </Button>
        </Card.Header>
        <Card.Content>{note.text}</Card.Content>
      </Card>
    </StyledNoteItem>
  );
}
