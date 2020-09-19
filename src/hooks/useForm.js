import {useState,} from "react"

const useForm = (initialState) => {

    const [values, setValues] = useState(initialState);

    const handleChange = (name, value) => {
        // const {name, value} = event.target
        const newForm = {...values, [name] : value}
        setValues(newForm)
    }

    const resetState = () => {
        setValues(initialState);
    };

    return {values, resetState, handleChange}
}

export default useForm;