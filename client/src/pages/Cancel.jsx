import { OctagonAlert } from "lucide-react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div className="flex flex-col gap-4 capitalize justify-center items-center py-20 ">
      <p className="text-xl font-thin">something went wrong</p>
      <p className="text-3xl font-bold">Please try again!</p>
      <p>
        <OctagonAlert color="#b00303" size={50} />
      </p>
      <p>
        <Link to="/">
          <button className="btn-black bg-[#b00303]">← Go Back</button>
        </Link>
      </p>
    </div>
  );
}

export default Cancel;
