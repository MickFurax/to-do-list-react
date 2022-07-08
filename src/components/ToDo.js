import { Trash2 } from 'react-feather';

const ToDo = () => {
        const inputName = "Test de chose à faire";
    return (
        <div className="mt-8 ml-8 border-2 p-2 w-fit rounded h-10 flex items-center">
            <input type="checkbox" name={inputName} className="m-1"/>
            <label for={inputName} className="m-1 mr-8">{inputName}</label>
            <Trash2 className='text-right opacity-25 hover:opacity-50'/>
        </div>
    );
};

export default ToDo;