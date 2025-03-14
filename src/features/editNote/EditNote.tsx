import { useRef } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import { noteActions } from "../../entities/Note/model/slice/noteSlice";
import s from "./EditNote.module.scss";

interface IProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  setIsEditable: (arg: any) => void;
  _id: number;
  text: string;
}

export const EditNote = ({ setIsEditable, _id, text }: IProps) => {
  const dispatch = useAppDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleEdit = () => {
    dispatch(
      noteActions.editNote({ _id, text: textareaRef.current?.value || "" })
    );
    setIsEditable(false);
  };

  return (
    <textarea
      name=""
      className={s.EditNote}
      onBlur={handleEdit}
      ref={textareaRef}
      defaultValue={text}
      maxLength={200}
      autoFocus
    ></textarea>
  );
};
