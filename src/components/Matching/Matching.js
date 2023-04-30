import React, { useState } from 'react'
import { Text, Button } from '@rneui/themed'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'


export default function Matching({ route }) {
  const { triviaName, triviaItems } = route.params;

  const [matchedItems, setMatchedItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleMatch = (option, value, index) => {
    if (selectedOption && selectedValue) {
      const matchedItem = { option: selectedOption, value: selectedValue, index };
      setMatchedItems([...matchedItems, matchedItem]);
      setSelectedOption(null);
      setSelectedValue(null);
    } else if (selectedOption) {
      setSelectedValue(value);
    } else if (selectedValue) {
      setSelectedOption(option);
    } else {
      setSelectedOption(option);
      setSelectedValue(value);
    }
  };

  const handleCheckAnswers = () => {
    const isAllMatched = matchedItems.length === triviaItems.length;
    if (isAllMatched) {
      const isAllCorrect = matchedItems.every(
        (item) =>
          triviaItems.filter(
            (t) => t.option === item.option && t.value === item.value
          ).length > 0
      );
      const result = {
        matchedItems: matchedItems,
        isAllCorrect: isAllCorrect
      };
      navigation.navigate('Summary', { result });
    } else {
      alert('Not all items are matched.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
        {item.prompt}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, marginRight: 8 }}>
          {item.answer.map((option, index) => (
            <TouchableOpacity
              key={`${item.prompt}_${option.option}`}
              style={{
                backgroundColor:
                  selectedOption === option.option ? 'yellow' : matchedItems.find(
                      (matchedItem) =>
                        matchedItem.option === option.option &&
                        matchedItem.value === null
                    )
                    ? 'orange'
                    : 'white',
                borderWidth: 1,
                borderColor: 'black',
                padding: 16,
                marginBottom: 8,
                borderRadius: 8
              }}
              onPress={() => handleMatch(option.option, selectedValue, index)}
            >
              <Text style={{ textAlign: 'center' }}>{option.option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          {item.answer.map((value, index) => (
            <TouchableOpacity
              key={`${item.prompt}_${value.value}`}
              style={{
                backgroundColor:
                  selectedValue === value.value ? 'yellow' : matchedItems.find(
                      (matchedItem) =>
                        matchedItem.option === null &&
                        matchedItem.value === value.value
                    )
                  ? 'orange'
                  : 'white',
                borderWidth: 1,
                borderColor: 'black',
                padding: 16,
                marginBottom: 8,
                borderRadius: 8
              }}
              onPress={() => handleMatch(selectedOption, value.value)}>
              <Text style={{ textAlign: 'center' }}>{value.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text 
        style={styles.titleStyle}>
          {triviaName}
      </Text>
      <FlatList 
        data={triviaItems} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.prompt} 
      />
      <View style={styles.checkStyle}>
        <Button title="Check Answers" onPress={handleCheckAnswers} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190840' ,
    padding: 16
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  checkStyle: {
    marginTop: 16
  }
  
})
