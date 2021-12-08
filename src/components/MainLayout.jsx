import React, { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import { MainLayoutStyle } from "./components.style";
import ModelViewer from "./ModelViewer";

const data = [
  {
    id: 1,
    title: "Masterplan",
    src: "plan",
  },
  {
    id: 2,
    title: "PLOT 3613",
    area: "280.625",
    src: "https://www.vectary.com/viewer/v1/?model=9ca65df0-a875-4bb3-be39-691c38653f1d&env=studio3",
  },
  {
    id: 3,
    title: "PLOT PH CLUSTER",
    area: "261.60",
    src: "https://www.vectary.com/viewer/v1/?model=a0c673fa-c734-4b3a-a15e-e6dc9aae2143&env=studio3",
  },
  {
    id: 4,
    title: "PLOT 6118",
    area: "315.17",
    src: "https://app.vectary.com/viewer/v1/?model=f43760d2-ac31-48d3-b73f-1fc7df1a26bd&env=studio3",
  },
  {
    id: 5,
    title: "PLOT 4814",
    area: "267.48",
    src: "https://app.vectary.com/viewer/v1/?model=6d3c433e-a41d-4832-9f36-aafdbd4057cb&env=studio3",
  },
  {
    id: 6,
    title: "PLOT 9001",
    area: "225.32",
    src: "https://www.vectary.com/viewer/v1/?model=e4b996d1-acdd-4d8a-8ec8-04ee0fdb0deb&env=studio3",
  },
  {
    id: 7,
    title: "PLOT 1031",
    area: "332.089",
    src: "https://www.vectary.com/viewer/v1/?model=e0b61a5e-0d87-403a-a8fa-3f9bcd857885&env=studio3",
  },

  {
    id: 8,
    title: "Virtual Tour",
    src: "https://makevr.pro/Dlf_3rd-F%20&%20Un-f/",
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
      <ModelViewer
        selectedItem={data.find((item) => item.id == selectedBtnId)}
      />
    </MainLayoutStyle>
  );
}

export default MainLayout;
