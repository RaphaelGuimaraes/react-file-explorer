import { FC } from "react";
import { default as icon } from "../../assets/icons";

export const Icon: FC<{ name: string }> = ({ name }) => {
  const isAction = !name.includes(".");

  if (isAction) {
    switch (name) {
      case "down":
        return <icon.ArrowDown />;
      case "right":
        return <icon.ArrowRight />;
      case "close":
        return <icon.X />;
    }
  }

  const extension = name.substring(name.lastIndexOf(".") + 1);

  switch (extension) {
    case "ico":
    case "svg":
      return <icon.ImageFile />;
    case "css":
      return <icon.CssFile />;
    case "js":
      return <icon.JsFile />;
    case "md":
      return <icon.ReadmeFile />;
    case "lock":
      return <icon.YarnFile />;
    case "json":
      return <icon.JsonFile />;
    case "gitignore":
      return <icon.GitFile />;
    default:
      return <icon.DefaultFile />;
  }
};

export default Icon;
