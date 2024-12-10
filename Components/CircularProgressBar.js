import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, CircularProgressBar, Text } from '@ui-kitten/components';
import {db,ref,onValue} from '../firebase';

export default function CircularProgressBarComp() {
    const [progress, setProgress] = useState(0);
    const [progresscolor, setprogresscolor] = useState("success");
    useEffect(()=>{
        const data = ref(db);

        onValue(data,(snapshot)=>{
            const percent=snapshot.val().binStatus.levelPercentage;
            setProgress(percent/100);
            if(percent>80){
                setprogresscolor("danger");
            }
            else{
                setprogresscolor("success");
            }
        });
    },[db]);
    return (
        <Layout style={styles.container} level="1">
        <CircularProgressBar
            progress={progress}
            status={progresscolor}
            style={styles.progressBar}
        />
        <Text category='h5' style={styles.text}>Bin Level</Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  progressBar: {
    transform: [{ scale: 2 }],
    width: 80,
    height: 80
  },
  text:{
    transform:[{translateY:50}]
  }
});
