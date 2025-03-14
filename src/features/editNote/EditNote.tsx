import { useRef, useState } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import { noteActions } from "../../entities/Note/model/slice/noteSlice";
import s from "./EditNote.module.scss";

interface IProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  setIsEditable?: (arg: any) => void;
  _id: number;
  text: string;
}

export const EditNote = ({ setIsEditable, _id, text }: IProps) => {
  const dispatch = useAppDispatch();
  //   const textareaRef = useRef<HTMLTextAreaElement>(null);
  //   const [inputValue, setInputValue] = useState(text);

  //   const maxLength = 100;

  //   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     const currentText = e.target.value;
  //     const lineBreaksCount = (currentText.match(/\n/g) || []).length * 10;
  //     const totalTextLength = currentText.length + lineBreaksCount;
  //     console.log(totalTextLength);

  //     // if (totalTextLength < maxLength) {
  //     setInputValue(currentText);
  //     // }
  //   };

  const [value, setValue] = useState(text);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setValue(e.currentTarget.innerText || "");
  };

  console.log(value);

  const handleEdit = () => {
    dispatch(noteActions.editNote({ _id, text: value }));
    // setIsEditable(false);
  };

  return (
    // <textarea
    //   name=""
    //   className={s.EditNote}
    //   onBlur={handleEdit}
    //   ref={textareaRef}
    //   defaultValue={text}
    //   onChange={handleChange}
    //   value={inputValue}
    //   autoFocus
    // ></textarea>
    <div
      className={s.EditNote}
      contentEditable={true}
      onInput={handleInput}
      onBlur={handleEdit}
      suppressContentEditableWarning={true}
      style={{
        whiteSpace: "pre-wrap",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      {text}
    </div>
  );
};
