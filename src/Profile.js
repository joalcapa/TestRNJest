import React from 'react';
import { Text, View } from 'react-native';

export default class Profile extends React.Component {
     render() {

         return (
             <View style={{ flex: 1, alignItems: 'center' }} >
                 <Text style={{fontSize:24}}>Profile Component</Text>
             </View>
         );
     }
}