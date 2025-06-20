export default function Task({ taskName, id }) {
    return (
        <div className="flex items-center justify-between border border-slate-800 rounded-lg p-2 my-3">
            <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" id={id} />
                <label htmlFor={id} className="font-semibold">
                    {taskName}
                </label>
            </div>
            <button className="delete-btn text-xs bg-red-500 p-1 px-2 rounded-4xl cursor-pointer hover:bg-red-700">
                delete
            </button>
        </div>
    );
}
