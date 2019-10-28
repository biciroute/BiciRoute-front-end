import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: "#212121"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    containerImage: {
        minHeight: "500px",
    },
    mapImage:{
        width: "100%",
        height: "100%",
        borderRadius: "0px",
    },
    paper: {
        padding: theme.spacing(3, 2),
    }
  }));
export default useStyles;