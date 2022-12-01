import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Form, FormItem } from 'react-native-form-component';
import { SafeArea } from '../../utility/safe-area.component';

//import storage from '@react-native-firebase/storage';
// import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import { Button, Text, TextInput } from 'react-native-paper';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';


export const AccountContainer = styled.View`
  padding: 32px;
  margin-top: 8px;
`;

export const AuthInput = styled(TextInput)`
  margin-bottom: 16px;
`;
export const TextArea = styled(TextInput)`
  height:150px;
  text-align-vertical: 'top';
`;

export const Title = styled.Text`
  font-size: 30px;
`;

 export const UploadScreen = () => {

  const [text, SetText] = useState("");
  const [textArea, setTextArea] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
//   const [uploadReference, setuploadReference] = useState('');

//   const [video, setVideo] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const pickVideo = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//         allowsEditing: true,
//         aspect: [4,3],
//         quality: 1,
//       });
//       const source = {uri: result.uri};
//       if (!result.cancelled) {
//         setVideo(source);
//       };
      
//     } catch (error) {
//       console.log(error);
//       alert(`Error-> ${error}`);
//     }
//   };

//   const uploadVideo = async () => {
//     if (video === null || text === ''|| textArea === '') {
//       alert("Nothing to upload");
//       return;
//     }
//     setUploading(true);
//     const response = await fetch(video.uri);
//     const blob = await response.blob();
//     const fileName = video.uri.substring(video.uri.lastIndexOf(`/`)+1);

//     const textFileName = text.substring(text.lastIndexOf('/')+1);
//     const textAreaFileName = textArea.substring(textArea.lastIndexOf('/')+1);

//     const randomNumber = Math.floor(Math.random() * 1000) + 1;
//     setNumber(randomNumber);

//     const randomNumber1 = Math.floor(Math.random() * 3000) + 1;
//     setNumber1(randomNumber1);

//     const randomNumber2 = Math.floor(Math.random() * 4000) + 1;
//     setNumber2(randomNumber2);

//     const randomNumberEnum = Math.floor(Math.random() * 2000) + 1;
//     setNumberEnum(randomNumberEnum);
//     const folderName = `${number}`;
//     const folderName1 = `${number1}`;
//     const folderName2 =`${number2}`;
//     const folderEnum = `${numberEnum}`;

//     // const reference = firebase.storage().ref(folderName);
//     // const task = reference.put(folderName);
//     // task.on('state_changed', taskSnapshot => {
//     //   setuploadReference(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
//     // });

//     var ref = firebase.storage().ref().child(folderEnum).child(folderName).child(fileName).put(blob);
//     var textRef = firebase.storage().ref().child(folderEnum).child(folderName1).child(textFileName).put(text);
//     var textAreaRef = firebase.storage().ref().child(folderEnum).child(folderName2).child(textAreaFileName).put(textArea);

//     try {
//       await ref;
//       // await textRef;
//       // await textAreaRef;
//     } catch (error) {
//       console.log(error);
//     }

//     setUploading(false);
//     alert('Video uploaded!');
//     setVideo(null);
//     SetText("");
//     setTextArea("");
//   };


//need to add inputs 2
  return (
    <SafeArea>
      <ScrollView>
      <AccountContainer>
        <AuthInput
          label="Name"
          value={videoUrl}
          textContentType="none"
          keyboardType="default"
          autoCapitalize="sentences"
          onChangeText={(url) => setVideoUrl(url)}
        />
        <AuthInput
          label="Video URL (youtube)"
          value={text}
          textContentType="none"
          keyboardType="default"
          autoCapitalize="sentences"
          onChangeText={(t) => SetText(t)}
        />
        <TextArea
          label="Comments"
          multiline={false}
          numberOfLines={10}
          value={textArea}
          textContentType="none"
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={(ta) => setTextArea(ta)}
        />
        </AccountContainer>
        {/* <Button title="Select" onPress={() => null}>SELECT VIDEO</Button> */}
      </ScrollView>
    </SafeArea>
  );
};