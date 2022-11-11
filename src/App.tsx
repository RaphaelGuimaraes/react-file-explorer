import { useState, useEffect } from "react";
import api, { TreeNode } from "./api";
import Directory from "./components/directory/";
import "./App.css";

export default function App() {
  const [directoryTree, setDirectoryTree] = useState<TreeNode>();

  const deleteHandler = (node: TreeNode) => {
    setDirectoryTree(node);
  };

  useEffect(() => {
    const getDirectory = async () => {
      const directory = await api.getDirectoryTree();
      setDirectoryTree(directory);
    };
    getDirectory();
  });

  return (
    <main className="main">
      {directoryTree && (
        <Directory
          id={directoryTree.id}
          type={directoryTree.type}
          name={directoryTree.name}
          children={directoryTree.children}
          deleteHandler={deleteHandler}
        />
      )}
    </main>
  );
}
