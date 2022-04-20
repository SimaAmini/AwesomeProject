import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {
    AppFormPicker,
    AppFormField,
    AppForm,
    SubmitButton,
} from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
})

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 },
]

const initialValues = {
    title: '',
    price: '',
    description: '',
    category: null,
}

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="title"
                    placeholder="Title"
                    maxLength={255}
                />
                <AppFormField
                    name="price"
                    placeholder="Price"
                    keyboardType="numeric"
                    maxLength={8}
                />
                <AppFormPicker
                    name="category"
                    placeholder="Category"
                    items={categories}
                />
                <AppFormField
                    name="description"
                    placeholder="Description"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
export default ListingEditScreen
