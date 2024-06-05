function App() {
  return (
    <>
      <div className="max-w-3xl h-screen mx-auto flex flex-col items-center py-10 px-6">
        <h1 className="py-4 font-bold text-4xl">TODO LIST</h1>
        <hr className="bg-gray-300 h-[1px] w-full" />

        <div className="w-full py-10">
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="  Add Item..."
              className="w-full h-10 rounded-md my-2"
            />
            <button type="submit" className="w-16">
              Add
            </button>
          </form>
        </div>

        <div className="w-full flex items-center justify-between bg-slate-700 rounded-md py-2">
          <h1 className="ml-2">Task 1</h1>
          <div>
            <button className="mx-2">Delete</button>
            <button className="mr-2">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
