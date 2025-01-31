import { Loader } from "lucide-react";
import useCreateRoom from "../hooks/useCreateRoom";

function CreateRoom() {
  const {
    formData,
    isLoading,
    handleFormData,
    handleFormSubmission,
    handleImageChange,
  } = useCreateRoom();
  return (
    <div className="max-w-sm sm:max-w-md mx-auto p-8 rounded-md shadow-2xl">
      <form className="w-full space-y-4" onSubmit={handleFormSubmission}>
        <h1 className="text-3xl font-bold">Create Room</h1>
        <div>
          <label htmlFor="roomname" className="label">
            Room name
          </label>
          <input
            type="text"
            id="roomname"
            name="roomname"
            required
            className="input"
            value={formData.roomname}
            onChange={handleFormData}
          />
        </div>

        <div>
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea
            rows="3"
            id="description"
            name="description"
            required
            className="input"
            value={formData.description}
            onChange={handleFormData}
          />
        </div>

        <div>
          <label htmlFor="price" className="label">
            price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required
            className="input"
            value={formData.price}
            onChange={handleFormData}
          />
        </div>

        <div>
          <label htmlFor="area" className="label">
            area
          </label>
          <input
            type="number"
            id="area"
            name="area"
            required
            className="input"
            value={formData.area}
            onChange={handleFormData}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="bed" className="label">
              bed
            </label>
            <select
              name="bed"
              id="bed"
              required
              className="input"
              value={formData.bed}
              onChange={handleFormData}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>

          <div>
            <label htmlFor="capacity" className="label">
              capacity
            </label>
            <select
              name="capacity"
              id="capacity"
              required
              className="input"
              value={formData.capacity}
              onChange={handleFormData}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2">
          <label
            htmlFor="image"
            className="cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            required
            className="input"
            value={formData.image}
            onChange={handleImageChange}
          />
        </div>

        <button type="submit" className="btn-violet" disabled={isLoading}>
          {isLoading ? (
            <Loader color="#ffffff" className="animate-spin mx-auto" />
          ) : (
            "Create Room"
          )}
        </button>
      </form>
    </div>
  );
}

export default CreateRoom;
