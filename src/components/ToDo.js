import { Trash2 } from "react-feather";

const ToDo = (props) => {
  const { id, name, removeTask, changeChecked, checked } = props;

  const handleRemove = () => {
    console.log(id);
    removeTask(id);
  };

  const handleChange = (event) => {
    changeChecked(id, event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <div className="mt-4 ml-4 border-2 p-2 w-fit rounded h-10 flex items-center">
      <input type="checkbox" name={id} checked={checked} className="m-1" onChange={handleChange} />
      <label htmlFor={id} className="m-1 mr-8">
        {name}
      </label>
      <Trash2
        onClick={handleRemove}
        className="text-right opacity-25 hover:opacity-50"
      />
    </div>
  );
};

export default ToDo;
