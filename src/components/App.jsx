import React ,{ useState }from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
    setNotes(prevNotes => {
      return [...prevNotes, newnote];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
      <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete = {deleteNote}
      />
      )
      })}
      <Footer />
    </div>
  );
}

export default App;