import React from "react";
import s from "./DeleteNote.module.scss";
import { useAppDispatch } from "../../app/store/hooks";
import { noteActions } from "../../entities/Note/model/slice/noteSlice";
import { MinusIcon } from "../../shared/icons";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  _id: number;
  className?: string;
}

export const DeleteNote = ({ className = "", _id, ...props }: IProps) => {
  const dispatch = useAppDispatch();

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(_id));
  };
  return (
    <div className={`${s.DeleteNote} ${className}`} {...props} onClick={deleteNote}>
      <MinusIcon />
    </div>
  );
};
