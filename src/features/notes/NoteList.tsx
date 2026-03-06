import { NoteItem } from "./NoteItem";
import type { Note } from "../../types/note";
import { NotesGrid } from "./NoteList.styles";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <NotesGrid as="p" $empty>
        No notes yet. Add one above!
      </NotesGrid>
    );
  }

  return (
    <NotesGrid as="ul">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </NotesGrid>
  );
}
