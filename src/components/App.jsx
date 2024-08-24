import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { fetchNotes, createNote, deleteNote } from '../services/api';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  async function loadNotes() {
    const fetchedNotes = await fetchNotes();
    setNotes(fetchedNotes);
  }

  async function addNote(newNote) {
    const addedNote = await createNote(newNote);
    setNotes(prevNotes => [...prevNotes, addedNote]);
  }

  async function removeNote(id) {
    await deleteNote(id);
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={() => removeNote(note.id)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
