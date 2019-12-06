import {
    StyleSheet
  } from 'react-native';

const profileStyles = StyleSheet.create({
    header: {
        backgroundColor:"#99ccde",
        borderColor: "#022935",
        borderBottomWidth: "2px"
      },
      headerContent: {
        padding: 30,
        alignItems: 'center',
      },
      icons: {
        marginLeft: 5,
      },
      image: {
        width: 90,
        height: 90,
        borderRadius: 45,
      },
      email: {
        marginHorizontal: 10
      },
      cardTittle: {
        color: "#808080",
        fontSize: 22,
        marginBottom: 5,
        textAlign: "left",
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 2,
        borderColor: "white",
        marginBottom: 10,
      },
      bici: {
        width: 90,
        height: 90,
        borderRadius: 53,
        borderWidth: 2,
        borderColor: "white",
        marginTop: 40,
        marginLeft: 10,
        marginBottom: 10,
      },
      name: {
        fontSize: 22,
        color: "#212121",
        fontWeight: '600',
      },
      profileDetail: {
        alignSelf: 'center',
        marginTop: 200,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#ffffff",
        borderColor: "#022935",
        borderTopWidth: "2px",
        borderLeftWidth: "1px",
        borderRightWidth: "1px",
        width:364
      },
      badgesDetail: {
        alignSelf: 'center',
        marginTop: 200,
        alignItems: 'center',
        flexDirection: 'col',
        position: 'absolute',
        backgroundColor: "#ffffff"
      },
      photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'auto',
      },
      photosCard: {
        margin: 'auto',
        marginTop: 10,
        marginLeft: 50,
        marginRight: 10,
        position: 'relative',
        zIndex: -1
      },
      photo: {
        width: 113,
        height: 113,
        marginTop: 5,
        marginRight: 5,
      },
      detailContent: {
        marginTop: 'auto',
        alignItems: 'center',
        borderColor: "#68A3B6",
        marginLeft:'0px',
        borderRightWidth: "1px",
        borderLeftWidth: "1px",
      },
      detailContent1: {
        marginTop: 10,
        alignItems: 'center',
        width:'120%'
      },
      title: {
        fontSize: 20,
        color: "#095d7b",
        marginRight:10
      },
      count: {
        fontSize: 18,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        marginTop: 40
      },
      bodyContent2: {
        flex: 1,
        maxwith: '100%',
        maxHeight: '100%',
        alignItems: 'left',
        padding: 1,
        marginBottom: 5
      },
      buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 100,
        borderRadius: 30,
        backgroundColor: "#00CED1",
      },
      description: {
        fontSize: 20,
        color: "#095d7b",
        marginTop: 10,
        textAlign: 'center'
      },
      container: {
        marginLeft: 0,
      }
});

export default profileStyles;