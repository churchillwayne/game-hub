import { Button, ButtonGroup } from "@chakra-ui/react";
import ColourMode from "./ColourMode";

function App() {
  return (
    <>
      <ColourMode />
      <div>
        <Button colorPalette="blue">Button</Button>
      </div>
    </>
  );
}

export default App;
