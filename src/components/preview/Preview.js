import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font, Image} from '@react-pdf/renderer';
import Grid from '@material-ui/core/Grid';
import Next from '../next/Next.js';
import courgette from './Courgette-Regular.ttf';
import marc from './MarckScript-Regular.ttf';
import margarine from './Margarine-Regular.ttf';

function Invitation(props){

  Font.register({ family: 'Marck Script', src: marc });
  Font.register({ family: 'Courgette', src: courgette });
  Font.register({ family: 'Margarine', src: margarine });

  const wDate = new Date(props.weddingDate).toLocaleDateString();
  const wTime = new Date(props.weddingTime).toLocaleTimeString().slice(0, 5);

  const styles = StyleSheet.create({
    page: {
      fontFamily: props.font,
      textAlign: 'center',
      fontSize: '15'
    },
    names: {
      fontSize: '30',
    },
    mt: {
      marginTop: '50px'
    },
    mb: {
      marginBottom: '30px'
    },
    wed: {
      fontSize: '40',
      marginTop: '20px',
      marginBottom: '20px'
    },
    section: {
      marginTop: '20px',
    },
    underlined: {
      textDecoration: 'underline'
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
        {props.background ? <Image src={props.background} style={styles.pageBackground} /> : <Text></Text>}
        <View>
          <Text style={[styles.names, styles.mt]}>{props.she}</Text>
          <Text>oraz</Text>
          <Text style={[styles.names, styles.mb]}>{props.he}</Text>
          <Text style={styles.mb}>mają zaszczyt zaprosić</Text>
          <Text style={styles.mb}>_______________________________________</Text>
          <Text>na swój</Text>
          <Text style={styles.wed}>Ślub</Text>
          <Text>który odbędzie się</Text>
          <Text>{wDate} r.</Text>
          <Text>o godzinie {wTime}</Text>
          <Text style={[styles.section, styles.underlined]}>Miejsce ślubu:</Text>
          {props.weddingPlace ? <Text>{props.weddingPlace}</Text> : <Text></Text>}
          {props.weddingStreet ? <Text>{props.weddingStreet}</Text> : <Text></Text>}
          {props.weddingCity ? <Text>{props.weddingCity}</Text> : <Text></Text>}
          <Text style={styles.section}>Państwo młodzi zapraszają również na wesele</Text>
          <Text style={[styles.section, styles.underlined]}>Miejsce wesela:</Text>
          <Text>{props.weddingPartyPlace}</Text>
          <Text>{props.weddingPartyStreet}</Text>
          <Text>{props.weddingPartyCity}</Text>
          <Text style={styles.section}>{props.info}</Text>
        </View>
      </Page>
    </Document>
  );
};

export const Preview = (props) => (
  <div>
    <PDFViewer style={{width: '500px', height: '800px'}}>
      <Invitation {...props}/>
    </PDFViewer>
    <Grid container spacing={3} justify='center'>
      <Grid item >
        <Next text='Wstecz' path='/info' type='prev'/>
      </Grid>
    </Grid>
  </div>
);
