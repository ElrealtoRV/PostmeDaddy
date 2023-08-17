import React, { useState,} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [postedItems, setPostedItems] = useState([]);



  const handlePost = () => {
    if (inputText.trim() !== '') {
      setPostedItems([...postedItems, { text: inputText, comments: [] }]);
      setInputText('');
    }
  };

  const handleComment = (index, comment) => {
    const updatedItems = [...postedItems];
    updatedItems[index].comments.push(comment);
    setPostedItems(updatedItems);
  };



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>

      <View style={styles.postedItemsContainer}>
        {postedItems.map((item, index) => (
          <View key={index} style={styles.postedItemContainer}>
            <Text style={styles.postedItem}>{item.text}</Text>

            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment..."
              onChangeText={(comment) => handleComment(index, comment)}
            />

            <TouchableOpacity style={styles.Cbutton} onPress={handlePost}>
              <Text style={styles.CbuttonText}>Comment</Text>
            </TouchableOpacity>

            <View style={styles.commentsContainer}>
              {item.comments.map((comment, commentIndex) => (
                <View key={commentIndex} style={styles.commentContainer}>
                  <Text key={commentIndex} style={styles.comment}>
                    {comment}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#a52a2a',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#a52a2a',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  postedItemsContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  postedItem: {
    fontSize: 18,
    marginBottom: 5,
  },
  commentInput: {
    borderColor: '#a52a2a',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },

  
  Cbutton: {
    backgroundColor: '#a52a2a',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    left: '60%',
  },
  CbuttonText: {
    color: 'white',
    textAlign: 'center',
  },

});
