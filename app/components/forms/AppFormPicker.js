import { useFormikContext } from 'formik'
import React from 'react'
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

function AppFormPicker({ items, name, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                selectedItem={values[name]}
                onSelectedItem={(item) => setFieldValue(name, item)}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker
