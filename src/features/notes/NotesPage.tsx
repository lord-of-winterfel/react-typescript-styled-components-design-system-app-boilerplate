import { useState, useCallback } from "react";
import { ThemeProvider, lightTheme, darkTheme } from "../../theme";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { NoteForm } from "./NoteForm";
import { NoteList } from "./NoteList";
import type { Note } from "../../types/note";
import { Button } from "../../components/Button/Button";
import {
  PageLayout,
  PageHeader,
  Title,
  ThemeToggleWrapper,
  MainContent,
} from "./NotesPage.styles";

function generateId() {
  return crypto.randomUUID?.() ?? `note-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function NotesPage() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [notes, setNotes] = useState<Note[]>([]);

  const theme = mode === "light" ? lightTheme : darkTheme;

  const handleAddNote = useCallback((text: string) => {
    setNotes((prev) => [...prev, { id: generateId(), text }]);
  }, []);

  const handleDeleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageLayout>
        <PageHeader>
          <Title>Note Maker</Title>
          <ThemeToggleWrapper>
            <Button
              variant="secondary"
              onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
            >
              {mode === "light" ? "Dark" : "Light"} theme
            </Button>
          </ThemeToggleWrapper>
        </PageHeader>

        <MainContent>
          <NoteForm onSubmit={handleAddNote} />
          <NoteList notes={notes} onDelete={handleDeleteNote} />
        </MainContent>
      </PageLayout>
    </ThemeProvider>
  );
}
