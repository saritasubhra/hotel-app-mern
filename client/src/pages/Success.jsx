import { CheckCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Confetti from "react-confetti";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    async function handleSuccess() {
      try {
        await axios.post("/bookings/checkout-success", { sessionId });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    handleSuccess();
  }, [sessionId]);

  return (
    <div className=" flex items-center justify-center">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={0.1}
        style={{ zIndex: 99 }}
        numberOfPieces={700}
        recycle={false}
      />

      <div className="flex flex-col items-center gap-4 py-10">
        <p className="text-7xl font-semibold">
          {" "}
          <CheckCircle className="text-emerald-400" size={100} />
        </p>
        <p className="text-3xl font-bold  ">
          You Successfully Created Your Booking!
        </p>
        <Link to="/">
          <button className="btn-black bg-emerald-500">← Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
