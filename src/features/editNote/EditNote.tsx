import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import { noteActions } from "../../entities/Note/model/slice/noteSlice";
import s from "./EditNote.module.scss";

interface IProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  _id: number;
  text: string;
}

export const EditNote = ({ _id, text }: IProps) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(text);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setValue(
      e.currentTarget.innerHTML
        .replace(/<div>/g, "\n")
        .replace(/<\/div>/g, "")
        .replace(/<br>/g, "")
        .replace(/<p>/g, "")
        .replace(/<\/p>/g, "") || ""
    );
  };

  const handleEdit = () => {
    dispatch(noteActions.editNote({ _id, text: value }));
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleEdit);

    return () => {
      window.removeEventListener("beforeunload", handleEdit);
    };
  });

  return (
    <div
      className={s.EditNote}
      contentEditable={true}
      onInput={handleInput}
      onBlur={handleEdit}
      suppressContentEditableWarning={true}
    >
      {text}
    </div>
  );
};
