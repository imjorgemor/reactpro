import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import "../styles/styles.css"


const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{

                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
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
                }
            >
                {
                    (formik) => (
                        <Form noValidate autoComplete='off'>

                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" className="error-message"/>

                            <label htmlFor="lastName">First Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" className="error-message"/>

                            <label htmlFor="email">First Name</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="span" className="error-message"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormikComponents