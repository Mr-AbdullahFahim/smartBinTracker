import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

export default function Title(){
    return(
        <Layout style={styles.container} level="1">
            <Text category='h1'>Bin Tracker</Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        transform:[{translateY:-200}]
    },
  });