import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

const initialState = {
  roomname: "",
  description: "",
  price: "",
  area: "",
  bed: "",
  capacity: "",
  image: "",
};

function useCreateRoom() {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  function handleFormData(e) {
    console.log(e);

    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };

      reader.readAsDataURL(file); // base64
    }
  }

  async function handleFormSubmission(e) {
    e.preventDefault();
    console.log(formData);

    try {
      setIsLoading(true);
      const res = await axios.post("/rooms", formData);
      toast.success(res.data.message);
      setFormData(initialState);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    formData,
    isLoading,
    handleFormData,
    handleFormSubmission,
    handleImageChange,
  };
}

export default useCreateRoom;
