import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {


    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        listarEventos();
    },[])

    const listarEventos = () => {
        fetch('http://192.168.0.2:5000/api/eventos')
        .then(response => response.json())
        .then(dados => {
            setEventos(dados.data);
            console.log(dados.data);
        })
        .catch(err => console.error(err));
    }

    const renderItem = (evento) => {
        <itemEvento nome={evento.item.nome} />
    }

    return (
        <View>
           <Text>HOME</Text>
           { /* <Text>{token}</Text> */}
            <FlatList
                data={eventos}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home;