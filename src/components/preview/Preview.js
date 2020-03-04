import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font, Image} from '@react-pdf/renderer';
import Grid from '@material-ui/core/Grid';
import Next from '../next/Next.js';
import courgette from './Courgette-Regular.ttf';
import lobster from './Kalam-Regular.ttf';
import margarine from './Margarine-Regular.ttf';

function Invitation(props){

  Font.register({ family: 'Lobster', src: lobster });
  Font.register({ family: 'Courgette', src: courgette });
  Font.register({ family: 'Margarine', src: margarine });

  const styles = StyleSheet.create({
    page: {
      fontFamily: props.font,
    },
    pageBackground: {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      display: 'block',
      height: '100%',
      width: '100%',
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
      <Image src={props.background} style={styles.pageBackground} />
        <View>
          <Text>{props.names}</Text>
          <Text>mają zaszczyt zaprosić na swój</Text>
          <Text>Ślub,</Text>
          <Text>który odbędzie się</Text>
          <Text>{props.weddingDate}</Text>
          <Text>o godzinie {props.weddingTime}</Text>
          <Text>Miejsce ślubu:</Text>
          <Text>{props.weddingPlace}</Text>
          <Text>{props.weddingStreet}</Text>
          <Text>{props.weddingCity}</Text>
          <Text>Państwo młodzi zapraszają również na wesele</Text>
          <Text>Miejsce wesela:</Text>
          <Text>{props.weddingPartyPlace}</Text>
          <Text>{props.weddingPartyStreet}</Text>
          <Text>{props.weddingPartyCity}</Text>
          <Text>{props.info}</Text>
        </View>
      </Page>
    </Document>
  );
};

export const Preview = (props) => (
  <>
  <PDFViewer>
    <Invitation {...props}/>
  </PDFViewer>
  <Grid container spacing={3} justify='center'>
    <Grid item >
      <Next text='Wstecz' path='/info' type='prev'/>
    </Grid>
  </Grid>
  </>
);
