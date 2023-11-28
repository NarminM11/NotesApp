import React from "react";
import Note from "./Note";
import notesData from "./notes";
import "./App.css"; 

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Notes App</h1>
      </header>
      <main>
        {notesData.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </main>
      <footer>
        <p>© 2023 QuickNotes</p>
      </footer>
    </div>
  );
};

export default App;
