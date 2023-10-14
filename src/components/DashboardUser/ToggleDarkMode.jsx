
const ToggleDarkMode = ({handleThemeSwitch}) => {

  return (
    <div className="bg-white dark:bg-gray-900 h-auto w-auto justify-center flex flex-row items-center">
      <div className="flex flex-row justify-between">
        <label
          htmlFor="dark-toggle"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              type="checkbox"
              name="dark-mode"
              id="dark-toggle"
              className="checkbox hidden"
              onChange={handleThemeSwitch}
            />
            <div className="block border-[1px] dark:border-white dark:bg-white border-gray-900 bg-gray-900 w-12 h-7 rounded-full"></div>
            <div className="dot absolute left-1 top-1 dark:bg-gray-900 bg-white w-5 h-5 rounded-full dark:transition dark:transform dark:translate-x-full"></div>
          </div>
        </label>
      </div>
    </div>
  );
};
export default ToggleDarkMode;
