export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    if(!values.email){
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if(!values.phone) {
        errors.phone = "Password is required"
    } else if (values.phone.length < 6){
        errors.phone = "Password needs more than 6 characters"
    } 

    if(!values.message) {
        errors.message = "Password is required"
    } else if (values.message.length < 6){
        errors.message = "Password needs more than 6 characters"
    } 
    
    return errors
}