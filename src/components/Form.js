import { Plus } from 'react-feather';

const AddButton = () => {
    return (
        <button className="bg-purple-600 text-white ml-2 pr-6 pl-4 h-10 items-center rounded flex hover:bg-purple-500">
            <Plus className='mr-2'/>
            Ajouter
        </button>
    );
};

const Form = () => {
    return (
        <form className='mt-8 ml-8 flex flex-row items-center h-10 '>
            <input placeholder='Ajouter une tache' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded p-2 w-fit text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
            <AddButton />
        </form>
    );
};

export default Form;