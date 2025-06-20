function App() {
    return (
        <div className="bg-slate-900 text-slate-50 flex justify-center items-center h-screen">
            <div class="border border-slate-700 w-[300px] h-fit min-h-[400px] rounded-2xl p-3 px-5">
                <h1 className="text-center text-xl font-extrabold underline underline-offset-4">
                    To-Do-List
                </h1>
                <div className="my-4 flex gap-3">
                    <input
                        type="text"
                        placeholder="Add Tasks!"
                        className="task-inputbox border p-2 text-sm flex-1 rounded-lg focus:outline-1 focus:outline-slate-500 text-slate-400"
                    />
                    <button className="flex-1 rounded-2xl cursor-pointer text-sm bg-slate-200 text-slate-900 font-semibold hover:text-slate-900 hover:bg-slate-300">
                        Add
                    </button>
                </div>
                <div className="my-8 text-sm text-slate-200 space-y-3"></div>
            </div>
        </div>
    );
}

export default App;
