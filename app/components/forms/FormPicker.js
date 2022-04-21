import { useFormikContext } from 'formik'
import React from 'react'
import Picker from '../Picker'
import ErrorMessage from './ErrorMessage'

function AppFormPicker({
    items,
    name,
    placeholder,
    width,
    PickerItemComponent,
    numberOfColumns,
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    return (
        <>
            <Picker
                items={items}
                placeholder={placeholder}
                selectedItem={values[name]}
                onSelectedItem={(item) => setFieldValue(name, item)}
                width={width}
                PickerItemComponent={PickerItemComponent}
                numberOfColumns={numberOfColumns}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker
