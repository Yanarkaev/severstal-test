import s from "./AddNote.module.scss";
import { useAppDispatch } from "../../app/store/hooks";
import { noteActions } from "../../entities/Note/model/slice/noteSlice";

export const AddNote = () => {
  const dispatch = useAppDispatch();

  const addNote = () => {
    dispatch(
      noteActions.addNote({
        _id: Date.now(),
        text: "Новая заметка",
        textColor: "",
        backgroundColor: "",
      })
    );
  };

  return (
    <div className={s.AddNote} onClick={addNote}>
      +
    </div>
  );
};
