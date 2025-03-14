import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { PaletteIcon } from "../../shared/icons";
import s from "./ChangeColors.module.scss";
import { debounce } from "../../shared/helpers";
import { useAppDispatch } from "../../app/store/hooks";
import { noteActions } from "../../entities/Note/model/slice/noteSlice";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  _id: number;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
}

export const ChangeColors = ({
  className = "",
  _id,
  textColor = "",
  backgroundColor = "",
}: IProps) => {
  const dispatch = useAppDispatch();

  const [colors, setColors] = useState({
    textColor: textColor,
    backgroundColor: backgroundColor,
  });
  const [isChangeable, setIsChangeable] = useState(false);

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
    if (colors.textColor || colors.backgroundColor) {
      dispatch(
        noteActions.changeNoteColors({
          _id,
          textColor: colors.textColor,
          backgroundColor: colors.backgroundColor,
        })
      );
    }
  }, [_id, colors.textColor, colors.backgroundColor, dispatch]);

  return (
    <div className={`${s.ChangeColors} ${className}`}>
      {isChangeable && (
        <div className={s.inner}>
          <div className={s.textColor}>
            <span>Цвет текста:</span>
            <input
              type="color"
              name="textColor"
              onChange={debouncedHandleChangeColor}
              defaultValue={colors.textColor}
            />
          </div>

          <div className={s.noteColor}>
            <span>Цвет фона:</span>
            <input
              type="color"
              name="backgroundColor"
              onChange={debouncedHandleChangeColor}
              defaultValue={colors.backgroundColor}
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
