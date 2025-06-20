import { useRef } from "react";

export default function Task({ taskName, id, onDelete }) {
    const labelRef = useRef(null);

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        if (labelRef.current) {
            labelRef.current.classList.toggle("line-through", isChecked);
        }
    };

    return (
        <div className="flex items-center justify-between border border-slate-800 rounded-lg p-2 my-3">
            <div className="flex items-center gap-3">
                <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    className="checkbox"
                    id={id}
                />
                <label ref={labelRef} htmlFor={id} className="font-semibold">
                    {taskName}
                </label>
            </div>
            <button
                onClick={onDelete}
                className="delete-btn text-xs bg-red-500 p-1 px-2 rounded-4xl cursor-pointer hover:bg-red-700"
            >
                delete
            </button>
        </div>
    );
}
