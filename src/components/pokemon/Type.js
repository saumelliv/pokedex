import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {map, capitalize} from "lodash";

import getColorByPokemon from "../../Utils/getColorByPokemon";

export default function Type(props) {
    const {type}=props



    return (
        <View style={styles.content}>
            {map(type, (item, index)=>(

                <View key={index} style={{...styles.pill, backgroundColor:getColorByPokemon(item.type.name)}}>
                    <Text >
                        {capitalize(item.type.name)}
                    </Text>

                </View>

            ))}

        </View>
    );
}

const styles= StyleSheet.create({
    content:{
        marginTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',

    },
    pill:{
        paddingHorizontal:30,
        paddingVertical:5,
        borderRadius: 20,
        marginHorizontal:10,
        // backgroundColor:'#f0f',
    }

})

