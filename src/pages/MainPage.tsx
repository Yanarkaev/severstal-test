import { Note } from "../entities";
import { AddNote } from "../features";
import { Container } from "../shared/ui";
import s from "./MainPage.module.scss";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { getNotesList } from "../entities/Note/model/selectors/note.selector";
import { useEffect } from "react";
import { noteActions } from "../entities/Note/model/slice/noteSlice";
import { INote } from "../entities/Note/model/types/noteSchema";

const defaultNote: INote = {
  _id: Date.now(),
  text: "Новая заметка",
  textColor: "",
  backgroundColor: "",
};
const savedNotes =
  localStorage.getItem("notes") &&
  JSON.parse(localStorage.getItem("notes") || "[]");

export const MainPage = () => {
  const { list } = useAppSelector(getNotesList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!savedNotes || savedNotes.length <= 0) {
      dispatch(noteActions.addNote(defaultNote));
    }
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Note tickets</h1>
      <Container className={s.inner}>
        {list &&
          list.map(({ _id, text, textColor, backgroundColor }) => {
            return (
              <Note
                text={text}
                _id={_id}
                textColor={textColor}
                key={_id}
                backgroundColor={backgroundColor}
              />
            );
          })}
        <AddNote />
      </Container>
    </div>
  );
};
