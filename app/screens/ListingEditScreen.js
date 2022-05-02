import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {
    FormPicker,
    FormField,
    Form,
    SubmitButton,
    FormImagePicker,
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import Screen from '../components/Screen'
import useLocation from '../hooks/useLocation'
import listingApi from '../api/listings'
import UploadScreen from './UploadScreen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select at least one image!'),
})
const categories = [
    {
        backgroundColor: '#fc5c65',
        icon: 'floor-lamp',
        label: 'Furniture',
        value: 1,
    },
    {
        backgroundColor: '#fd9644',
        icon: 'car',
        label: 'Cars',
        value: 2,
    },
    {
        backgroundColor: '#fed330',
        icon: 'camera',
        label: 'Cameras',
        value: 3,
    },
    {
        backgroundColor: '#26de81',
        icon: 'cards',
        label: 'Games',
        value: 4,
    },
    {
        backgroundColor: '#2bcbba',
        icon: 'shoe-heel',
        label: 'Clothing',
        value: 5,
    },
    {
        backgroundColor: '#45aaf2',
        icon: 'basketball',
        label: 'Sports',
        value: 6,
    },
    {
        backgroundColor: '#4b7bec',
        icon: 'headphones',
        label: 'Movies & Music',
        value: 7,
    },
    {
        backgroundColor: '#a55eea',
        icon: 'book-open-variant',
        label: 'Books',
        value: 8,
    },
    {
        backgroundColor: '#778ca3',
        icon: 'application',
        label: 'Other',
        value: 9,
    },
]

const initialValues = {
    title: '',
    price: '',
    description: '',
    category: null,
    images: [],
}

function ListingEditScreen(props) {
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const location = useLocation()

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        )

        if (!result.ok) {
            setUploadVisible(false)
            return alert('Could not save the listing.')
        }

        resetForm()
    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
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
            <UploadScreen
                progress={progress}
                visible={uploadVisible}
                onDone={() => setUploadVisible(false)}
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
export default ListingEditScreen
