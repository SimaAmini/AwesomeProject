import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'

import { FormPicker, FormField, Form, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
})

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: 'Clothing', value: 2, backgroundColor: 'red', icon: 'email' },
    { label: 'Cameras', value: 3, backgroundColor: 'red', icon: 'lock' },
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
            <Form
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField name="title" placeholder="Title" maxLength={255} />
                <FormField
                    name="price"
                    placeholder="Price"
                    keyboardType="numeric"
                    maxLength={8}
                    width={120}
                />
                <FormPicker
                    name="category"
                    placeholder="Category"
                    items={categories}
                    width="50%"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <FormField
                    name="description"
                    placeholder="Description"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                />
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
export default ListingEditScreen
