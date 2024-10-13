import React, { useState } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBarExample = () => {
  const [progress, setProgress] = useState(0.3);

  const increaseProgress = () => {
    if (progress < 1) {
      setProgress(progress + 0.1);
    }
  };

  return (
    <View style={{ marginTop: 50, alignItems: 'center' }}>
      <Progress.Bar progress={progress} width={300} color={"green"} backgroundColor={"#DDD"}/>
     
     <Text onPress={() => increaseProgress()}>Click</Text>
    </View>
  );
};

export default ProgressBarExample;
