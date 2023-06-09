import React, { useState } from 'react'
import { Text, Button } from '@rneui/themed'
import { View, FlatList, StyleSheet } from 'react-native'


export default function Matching({ route, navigation }) {
  const { triviaName, triviaItems } = route.params
  const [matchedItems, setMatchedItems] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  //const [selectedValue, setSelectedValue] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  //const [userAnswers, setUserAnswers] = useState(Array(triviaItems.length).fill(""));
  const matchingColors = ['#F24968', '#6929F2','#9B72F2','#14D990','#F2B807', '#F22ED2']

  //called when the user selects an option to match with a value
  //updates matchedItems state 
  const handleMatch = (option, value, index) => {
    let matches = [];
    let match = {option: '', value:'', index: -1};

    //if value is not null, the user has selected an option
    //function updates existing match in matchedItems array with the new value
    if(value !== null){
      match = {option: selectedOption, value:value, index: selectedIndex}; 
      matches = matchedItems.filter( i => i.index !== selectedIndex);
      setSelectedIndex(-1);
      setSelectedOption(null)
    }else{
      //value is null
      //creates a new match object and adds it to matchedItems array
      match = {option: option, value: null, index: index};
      matches = matchedItems;
      setSelectedOption(option);
      setSelectedIndex(index);
    }
    matches.push(match);
    setMatchedItems(matches);
  }

  //called when user hits "Check Answers"
  const checkAnswers = () => {
    const isAllMatched = matchedItems.length === triviaItems[0].answer.length
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
      console.log(result)
     //setUserAnswers(result)
    //navigation.navigate('Summary', { triviaItems: triviaItems, userAnswers: result })
    //User has matched all items
    alert('All Matched!')
    } else {
      // ERROR: user has not matched all items
      alert('Not all items are matched.')
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.matchingContainer}>
      <Text style={styles.promptStyle}>
        {item.prompt}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, marginRight: 8 }}>
          {item.answer.map((option, index) => (
            
            <Button
              key={`${item.prompt}_${option.option}`}
              titleStyle= {styles.optionStyle}
              title = {option.option}
              buttonStyle={{
                background: selectedIndex === null ? 'white' 
                  : selectedIndex === index ? `${matchingColors[selectedIndex]}` 
                  : matchedItems.some(i => i.index === index) === false? 'white' 
                  : matchingColors[matchedItems.find(i => i.index === index).index],
                borderWidth: 1,
                borderColor: 'black',
                padding: 16,
                marginBottom: 8,
                borderRadius: 8
              }}
              onPress={() => handleMatch(option.option, null, index)}
            />
          ))}
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          {item.answer.sort().map((value, index) => (
            <Button
              key={`${item.prompt}_${value.value}`}
              title = {value.value}
              titleStyle={styles.valueStyle}
              buttonStyle={{
                background: selectedIndex === null ? 'white' 
                  : matchedItems.some(i => i.value === value.value) === false? 'white' 
                  : matchingColors[matchedItems.find(i => i.value === value.value).index],
                borderWidth: 1,
                borderColor: 'black',
                padding: 16,
                marginBottom: 8,
                borderRadius: 8
              }}
              onPress={() => handleMatch(selectedOption, value.value, selectedIndex)}>
            </Button>
          ))}
        </View>
      </View>
    </View>
  )

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
      <View style={styles.checkContainer}>
        <Button 
          title="Check Answers" 
          titleStyle={styles.checkTitleStyle}
          buttonStyle= {styles.checkStyle}
          onPress={checkAnswers} 
        />
      </View>
    </View>
  )
}

//styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190840' ,
    padding: 16
  },
  matchingContainer: {
    marginBottom: 16
  },
  promptStyle: {
    fontSize: 25, 
    color: 'white',
    marginBottom: 50
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white'
  },
  checkContainer: {
    marginTop: 16
  },
  checkStyle: {
    backgroundColor: '#26A646',
    height: 60,
    borderRadius: 10
  },
  checkTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  optionStyle: {
    textAlign: 'center',
    color: 'black'
  },
  valueStyle: {
    textAlign: 'center',
    color: 'black'
  }
  
})
