import React, { FC } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

// Create Document Component
const MyDocument: FC<any> = props => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text>Titulo</Text>
            <View style={styles.section}>
                <Text>Grafico 1</Text>
            </View>
            <View style={styles.section}>
                <Text>Grafico 2</Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;
