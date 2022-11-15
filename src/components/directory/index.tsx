import { useState, FC } from "react";
import api, { TreeNode } from "../../api";
import Icon from "../icon";
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

  const deleteButton = () => {
    return (
      <>
        <S.DeleteButton type="button" onClick={() => deleteItemHandler()}>
          <Icon name="close" />
        </S.DeleteButton>
      </>
    );
  };

  const deleteItemHandler = async () => {
    const directoryTree = await api.deleteById(id);
    deleteHandler(directoryTree);
  };

  const expandButton = () => {
    return isExpanded ? <Icon name="down" /> : <Icon name="right" />;
  };

  const headerContent = () => {
    return (
      <S.HeaderContent
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...(type === "folder" && {
          onClick: () => {
            toggleExpanded(!isExpanded);
          },
        })}
      >
        {type === "folder" && expandButton()}
        {type === "file" && <Icon name={name} />}
        <S.HeaderTitle>{name}</S.HeaderTitle>
        {isHovered && deleteButton()}
      </S.HeaderContent>
    );
  };

  const mapChildren = () => {
    return children?.map((child) => (
      <Directory key={child.id} {...child} deleteHandler={deleteHandler} />
    ));
  };

  if (type === "project") {
    return (
      <S.Aside>
        <h1 className="project-title">{name}</h1>
        {mapChildren()}
      </S.Aside>
    );
  }

  if (type === "folder") {
    return (
      <S.Container>
        {headerContent()}
        {isExpanded && mapChildren()}
      </S.Container>
    );
  }

  return <S.Container>{headerContent()}</S.Container>;
};

export default Directory;
