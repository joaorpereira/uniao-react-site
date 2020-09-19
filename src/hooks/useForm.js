import {useState} from "react"

const useForm = () => {

    const [inputValues, setInputValues] = useState({
        username: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target
        setInputValues({...inputValues, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return {inputValues, handleSubmit, handleChange}

}

export default useForm;