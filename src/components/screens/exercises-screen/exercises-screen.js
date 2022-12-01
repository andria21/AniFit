import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { ExerciseInfo } from '../../exercises/exercise-info.component';
import { SafeArea } from '../../utility/safe-area.component';

import { FadeInView } from '../../animations/fade.animation';
import { CategoriesContext } from '../../exercises/categories.context';
import { Text } from 'react-native-paper';
import { addCollectionAndDocuments } from '../../../utils/firebase.utils';
import SHOP_DATA from '../../../../video_data'

const ExercisetList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const ExercisesScreen = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])
  return (
    <SafeArea>
      <FadeInView>
      {Object.keys(categoriesMap).map(title => {
            <Text>{title}</Text>
            {
              categoriesMap[title].map(exercise => (
                <ExercisetList
                  data={exercise}
                  renderItem={() => <ExerciseInfo key={exercise.id} exercise={exercise}/>}
                  keyExtractor={(item) => item.name}
                />
              ))}

          })}
      </FadeInView>
    </SafeArea>
  )
}