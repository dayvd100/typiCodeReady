const InputText = ({onChange, searchValue}) => {
  return(
              <input type="text" 
               onChange={onChange}
               value={searchValue}
               /> )
}

export default InputText;