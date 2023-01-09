import { Button } from "@mui/material";
import { H1 } from "component/display/font";
import { useDispatch, useSelector } from "react-redux";
import { changeMode, ColorMode } from "./store/modules/ColorMode";
import { ReducerType } from "./store/modules/RootReducer";

export default function Home() {
  const dispatch = useDispatch();
  const Color = useSelector<ReducerType, ColorMode>((state) => state.ColorMode);

  const changeItem = () => {
    dispatch(
      changeMode({
        mode: Color.mode === "dark" ? "white" : "dark",
      } as ColorMode)
    );
  };
  return (
    <div>
      <H1 color={"black"}>{}</H1>
      <Button onClick={changeItem}>{Color.mode}</Button>
    </div>
  );
}
