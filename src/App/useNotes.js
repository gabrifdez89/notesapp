import { useLocalStorage } from './useLocalStorage';

const defaultNotes = [
  { title: "Lorem Ipsum title",
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  { title: "Lorem Ipsum title 2",
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  { title: "Lorem Ipsum title 3",
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
];
const defaultNextNodeId = 4;

function useNotes() {
  const {
    item: notes,
    saveItem: saveNotes,
  } = useLocalStorage('NOTES_V1', defaultNotes);

  const {
    item: nextNoteId,
    saveItem: saveNextNoteId,
  } = useLocalStorage('NEXT_NODE_ID_V1', defaultNextNodeId);

  const createNote = () => {
    let newNotes = [...notes];
    newNotes.push({ title: '', id: nextNoteId, text: '' });
    saveNextNoteId(nextNoteId + 1);
    saveNotes(newNotes);
  };

  const deleteNote = (note) => {
    let newNotes = [...notes];
    let index = newNotes.findIndex(x => x.id === note.id);
    newNotes.splice(index, 1);
    saveNotes(newNotes);
  };

  const editNote = (note) => {
    let newNotes = [...notes];
    let index = newNotes.findIndex(x => x.id === note.id);
    newNotes[index].title = note.title;
    newNotes[index].text = note.text;
    saveNotes([...notes]);
  };
  
  return {
    notes,
    createNote,
    deleteNote,
    editNote,
  };
}

export { useNotes };