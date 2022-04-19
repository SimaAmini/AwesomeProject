import React, { useState } from 'react'
import { FlatList, View } from 'react-native'

import ListingItem from '../components/ListingItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'title 1',
        description: 'dksldk',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'title 2',
        description: 'dksldk 2',
        image: require('../assets/mosh.jpg'),
    },
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        const list = messages.filter((m) => m.id !== message.id)
        setMessages(list)
    }

    return (
        <Screen>
            <FlatList
                refreshing={refreshing}
                onRefresh={() =>
                    setMessages([
                        {
                            id: 2,
                            title: 'title 2',
                            description: 'dksldk 2',
                            image: require('../assets/mosh.jpg'),
                        },
                    ])
                }
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListingItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log('selected', item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    )
}

export default MessagesScreen
