import { useFormik } from 'formik'
import * as Yup from 'yup'
import "../styles/styles.css"


const FormikYupPage = () => {

    //inicializar formik
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Debe de tener 15 caracteres o menos")
                .required('Requerido'),
            lastName: Yup.string()
                .max(10, "Debe de tener 15 caracteres o menos")
                .required('Requerido'),
            email: Yup.string()
                .email("email no tiene un formato valido")
                .required('Requerido')
        })
    });


    return (
        <div>
            <h1>Formik Yup tutorial</h1>

            {/* GET FIELD PROPS
            Includes onblur, onchange, value */}

            <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                />
                {(touched.firstName && errors.firstName) && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikYupPage