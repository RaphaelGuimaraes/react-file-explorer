import { useState, FC } from "react";
import api, { TreeNode } from "../../api";
import { default as icon } from "../../assets/icons";
import { IDirectory } from "../types";
import * as S from "./styles";

const Directory: FC<TreeNode & IDirectory> = ({
  id,
  type,
  name,
  children,
  deleteHandler,
}) => {
  const [isExpanded, toggleExpanded] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const getExtension = (filename: string) => {
    const extension = filename.substring(filename.lastIndexOf(".") + 1);

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

  const deleteButton = () => {
    return (
      <>
        <S.DeleteButton type="button" onClick={() => deleteItemHandler()}>
          <icon.X />
        </S.DeleteButton>
      </>
    );
  };

  const deleteItemHandler = async () => {
    const directoryTree = await api.deleteById(id);
    deleteHandler(directoryTree);
  };

  if (type === "project") {
    return (
      <S.Aside>
        <h1 className="project-title">{name}</h1>
        {children?.map((child) => (
          <Directory key={child.id} {...child} deleteHandler={deleteHandler} />
        ))}
      </S.Aside>
    );
  }

  if (type === "folder") {
    return (
      <S.Container>
        <S.HeaderContent
          onClick={() => toggleExpanded(!isExpanded)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {isExpanded ? <icon.ArrowDown /> : <icon.ArrowRight />}
          <S.HeaderTitle>{name}</S.HeaderTitle>
          {isHovered && deleteButton()}
        </S.HeaderContent>

        {isExpanded &&
          children?.map((child) => (
            <Directory
              key={child.id}
              {...child}
              deleteHandler={deleteHandler}
            />
          ))}
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.HeaderContent
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {getExtension(name)}
        <S.HeaderTitle>{name}</S.HeaderTitle>
        {isHovered && deleteButton()}
      </S.HeaderContent>
    </S.Container>
  );
};

export default Directory;
