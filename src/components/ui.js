import Header from "./header";
import Versions from "./versions";

const UI = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap h-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-row">
          <ul
            className="mb-0 list-none flex-wrap justify-between pt-3 pb-4 flex flex-col h-64 mt-20 "
            role="tablist"
          >
            <Versions />
          </ul>
        </div>
      </div>
    </>
  );
};

export default UI;
