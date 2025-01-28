import { LoaderCircle } from "lucide-react";

function Spinner() {
  return (
    <div className="flex justify-center animate-spin mt-16">
      <LoaderCircle size={40} />
    </div>
  );
}

export default Spinner;
