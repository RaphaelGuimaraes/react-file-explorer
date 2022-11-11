import { render, screen } from "@testing-library/react";
import Directory from "./index";

describe("Directory Component", () => {
  it("renders component with type file correctly", () => {
    render(
      <Directory
        id="e11759b2-1081-405f-894c-2de8b12f31d4"
        type="file"
        name="App.js"
        deleteHandler={() => {}}
      />
    );
    expect(screen.getByText("App.js")).toBeInTheDocument();
    expect(screen.getByTestId("icon-js-file")).toBeInTheDocument();
  });

  it("renders component with type folder correctly", () => {
    render(
      <Directory
        id="99f923c2-17ef-48b0-8300-ae5b702f89b5"
        type="folder"
        name="src"
        children={[
          {
            id: "96a41d27-7009-4bb8-b723-a2b6850c2b4c",
            type: "file",
            name: "App.css",
          },
        ]}
        deleteHandler={() => {}}
      />
    );
    expect(screen.getByText("src")).toBeInTheDocument();
    expect(screen.getByTestId("icon-arrow-right")).toBeInTheDocument();
  });

  it("renders component with type project correctly", () => {
    render(
      <Directory
        id="0eab8660-3735-4cde-af38-3724536fb409"
        type="project"
        name="my project"
        children={[
          {
            id: "19515e30-5f39-4a59-bd22-7497ae8b2de9",
            type: "folder",
            name: "config",
          },
        ]}
        deleteHandler={() => {}}
      />
    );
    expect(screen.getByText("my project")).toBeInTheDocument();
  });
});
