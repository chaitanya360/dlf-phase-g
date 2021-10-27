import React, { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import { MainLayoutStyle } from "./components.style";
import ModelViewer from "./ModelViewer";

const data = [
  {
    id: 1,
    title: "PLAN A",
    src: "https://www.vectary.com/viewer/v1/?model=9ca65df0-a875-4bb3-be39-691c38653f1d&env=studio3",
  },
  {
    id: 2,
    title: "PLAN B",
    src: "https://www.vectary.com/viewer/v1/?model=a0c673fa-c734-4b3a-a15e-e6dc9aae2143&env=studio3",
  },
  {
    id: 3,
    title: "PLAN C",
    src: "https://app.vectary.com/viewer/v1/?model=f43760d2-ac31-48d3-b73f-1fc7df1a26bd&env=studio3",
  },
  {
    id: 4,
    title: "PLAN D",
    src: "https://app.vectary.com/viewer/v1/?model=6d3c433e-a41d-4832-9f36-aafdbd4057cb&env=studio3",
  },
  {
    id: 5,
    title: "PLAN E",
    src: "https://www.vectary.com/viewer/v1/?model=e4b996d1-acdd-4d8a-8ec8-04ee0fdb0deb&env=studio3",
  },
  {
    id: 6,
    title: "PLAN F",
    src: "https://www.vectary.com/viewer/v1/?model=e0b61a5e-0d87-403a-a8fa-3f9bcd857885&env=studio3",
  },
  {
    id: 7,
    title: "Masterplan",
    src: false,
  },
  {
    id: 8,
    title: "Virtual Tour",
    src: false,
  },
];

function MainLayout(props) {
  const [selectedBtnId, setSelectedBtnid] = useState(data[0].id);
  return (
    <MainLayoutStyle>
      <ButtonsContainer
        buttons={data}
        selectedBtnId={selectedBtnId}
        setSelectedBtnid={setSelectedBtnid}
      />
      <ModelViewer src={data.find((item) => item.id == selectedBtnId).src} />
    </MainLayoutStyle>
  );
}

export default MainLayout;
