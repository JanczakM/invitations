import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Invitation = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const InvitationDownload = () => (
  <div>
    <PDFDownloadLink document={<Invitation />} fileName="invitation.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Pobieranie...' : 'Pobierz!')}
    </PDFDownloadLink>
  </div>
)

export const Preview = () => (
  <>
  <PDFViewer>
    <Invitation />
  </PDFViewer>
  <InvitationDownload />
  </>
);
