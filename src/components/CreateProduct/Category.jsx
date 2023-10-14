import Select from "react-select";

const Category = (props) => {
  
  const options = [
    ...props.categories.map((element) => ({
      label: element,
      value: element,
    })),
  ];
  return (
      <Select
        options={options}
        styles={{
          control: (provided) => ({
            ...provided,
            height:'41px',
            width: 'full',
            padding: 'p-2.5',
            borderRadius: '0.5rem',
            backgroundColor: ' bg-gray-50 dark:bg-stone-900 dark:border-gray-600 dark:text-black',
            fontSize:'0.875rem',
          }),
          placeholder:(provided) => ({
            ...provided,
            color:'#939ba9'
          })
        }}
        placeholder="Select category"
        id="category"
        className={`bg-gray-50 dark:bg-stone-900 dark:border-gray-600`}
        value={
          props.selectedCategory
            ? { label: props.selectedCategory, value: props.selectedCategory }
            : null
        }
        onChange={(selectedOption) => {
          props.onSelectCategory(selectedOption.value);
        }}
      />
  );
};

export default Category;

