import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    paper: {
        padding: theme.spacing(3, 2),
        maxWidth: '600px',
        margin: 'auto'
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default useStyles;