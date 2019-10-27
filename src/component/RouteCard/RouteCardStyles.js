import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
      width: "100%",
      maxWidth: "500px",
      //maxHeight: "290px",
      marginTop: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "10px"
    },
    media: {
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default useStyles;