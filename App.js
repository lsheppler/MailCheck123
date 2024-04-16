import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { scrollView } from 'react';
export default function App() {

    const[List,setList]=useState(
        [
        { grain: 'Quinoa', key: '1' },
        { grain: 'Wheat', key: '2' },
        { grain: 'Barley', key: '3' },
        { grain: 'Maize', key: '4' },
        { grain: 'Oats', key: '5' },
        { grain: 'Cornmeal', key: '6' },
        { grain: 'Rice', key: '7' },
        { grain: 'Millet', key: '8' },
        ]
   );
return (
    <View style={styles.container}>
        <ScrollView>
            {List.map(item=>(
                <View key={item.key}>
                    <Text style={styles.listStyle}>{item.fruit}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingHorizontal: 20,
  },
  listStyle:{
    marginTop: 24,
    padding: 30,
    backgroundColor: '#ffe4c4',
    fontSize: 24,}
});