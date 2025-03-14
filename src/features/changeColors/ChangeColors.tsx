import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { PaletteIcon } from "../../shared/icons";
import s from "./ChangeColors.module.scss";
import { debounce } from "../../shared/helpers";
import { useAppDispatch } from "../../app/store/hooks";
import { noteActions } from "../../entities/Note/model/slice/noteSlice";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  _id: number;
  className?: string;
}

export const ChangeColors = ({ className = "", _id }: IProps) => {
  const [colors, setColors] = useState({
    textColor: "",
    backgroundColor: "",
  });

  const { textColor, backgroundColor } = colors;

  const dispatch = useAppDispatch();

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColors((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const debouncedHandleChangeColor = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => handleChangeColor(e), 100),
    []
  );

  useEffect(() => {
    if (textColor || backgroundColor) {
      dispatch(
        noteActions.changeNoteColors({
          _id,
          textColor: textColor,
          backgroundColor: backgroundColor,
        })
      );
    }
  }, [_id, textColor, backgroundColor, dispatch]);

  const [isChangeable, setIsChangeable] = useState(false);
  return (
    <div className={`${s.ChangeColors} ${className}`}>
      {isChangeable && (
        <div className={s.inner}>
          <div className={s.textColor}>
            Цвет текста:{" "}
            <input
              type="color"
              name="textColor"
              onChange={debouncedHandleChangeColor}
            />
          </div>

          <div className={s.noteColor}>
            Цвет фона:{" "}
            <input
              type="color"
              name="backgroundColor"
              onChange={debouncedHandleChangeColor}
            />
          </div>
        </div>
      )}
      <PaletteIcon
        className={s.icon}
        onClick={() => setIsChangeable((prev) => !prev)}
      />
    </div>
  );
};
