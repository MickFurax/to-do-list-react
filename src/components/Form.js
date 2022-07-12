import { useState } from "react";
import { Plus } from "react-feather";

const AddButton = (props) => {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-purple-600 text-white ml-2 pr-6 pl-4 h-10 items-center rounded flex hover:bg-purple-500"
    >
      <Plus className="mr-2" />
      Ajouter
    </button>
  );
};

const Form = (props) => {
  const [value, setValue] = useState("");

  const { appendTask } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== "") {
      appendTask(value);
    }
    setValue("");
  };

  const handleChange = (arg) => {
    setValue(arg.target.value);
  };

  return (
    <form
      className="mt-4 ml-4 flex flex-row items-center h-10 "
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        placeholder="Ajouter une tache"
        value={value}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded p-2 w-fit text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <AddButton onClick={handleSubmit} />
    </form>
  );
};

export default Form;
