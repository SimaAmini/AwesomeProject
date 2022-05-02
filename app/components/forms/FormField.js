import React from 'react'
import { useFormikContext } from 'formik'

import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'

function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, errors, touched, setFieldValue, values } =
        useFormikContext()

    return (
        <>
            <TextInput
                onChangeText={(text) => setFieldValue(name, text)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
                value={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormField
