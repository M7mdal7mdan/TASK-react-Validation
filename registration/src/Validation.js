import * as yup from "yup";
const schema = yup.object().shape({
    firstname: yup.string().min(1).required("please enter your first name"),
    lastname: yup.string().min(1).required("please enter your last name"),
    phonenumber: yup.string().max(9).matches(/[569]\d{7}$/,"enter your kuwaiti phone number"),
    email: yup.string().min(1).matches(/^\S+@\S+.\S+$/,"please enter your email"),
    civilid: yup.string().min(12).max(12).required("please enter your civil id"),
    highschoolgrade: yup.number().min(0).max(100).typeError("please enter your high school garde")
})
export default schema;