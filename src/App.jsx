import Button from "./components/Button";
import { ArrowRight } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col gap-6 p-10 bg-black min-h-screen">
      <Button text="Primary" primary iconSuffix={ArrowRight}/>
      <Button text="Secondary" secondary />
      <Button rounded text="Pink" brownishPink />

    </div>
  );
}

export default App;