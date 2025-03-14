import { useState } from "react";
import { ChangeColors, DeleteNote, EditNote } from "../../features";
import s from "./Note.module.scss";
import { INote } from "./model/types/noteSchema";

interface IProps extends React.HTMLAttributes<HTMLDivElement>, INote {}

export const Note = ({ text, _id, textColor, backgroundColor }: IProps) => {
  return (
    <div
      className={s.Note}
      style={{ color: textColor, backgroundColor: backgroundColor }}
    >
      <DeleteNote className={s.delete} _id={_id} />
      <ChangeColors _id={_id} className={s.changeColors} />
      <EditNote text={text} _id={_id} />
    </div>
  );
};
