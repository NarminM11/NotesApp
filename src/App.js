// App.js
import React from "react";
import Note from "./Note";
import "./App.css";
import initialNotes from "./notes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: initialNotes,
      newNote: { title: "", content: "", image: "" },
    };
  }

  handleChange = (name, value) => {
    this.setState((prevState) => ({
      newNote: { ...prevState.newNote, [name]: value },
    }));
  };

  addNote = () => {
    const { newNote, notes } = this.state;

    if (newNote.title && newNote.content) {
      const createdNote = {
        title: newNote.title,
        content: newNote.content,
        createdDate: new Date(),
        image: newNote.image || null,
      };

      this.setState({
        notes: [...notes, createdNote],
        newNote: { title: "", content: "", image: "" },
      });
    }
  };

  render() {
    const { notes, newNote } = this.state;

    return (
      <div className="app">
        <header>
          <h1>Notes App</h1>
        </header>
        <main>
          {notes.map((note, index) => (
            <Note key={index} note={note} />
          ))}
          <div className="add-note-form">
            {["title", "content", "image"].map((field) => (
              <input
                key={field}
                type={field === "content" ? "textarea" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={newNote[field]}
                onChange={(e) => this.handleChange(e.target.name, e.target.value)}
              />
            ))}
            <button onClick={this.addNote}>Add Note</button>
          </div>
        </main>
        <footer>
          <p>© 2023 Your App Name</p>
        </footer>
      </div>
    );
  }
}

export default App;
