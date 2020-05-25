import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingIcon from '@material-ui/icons/PlayForWork';
import { makeStyles } from '@material-ui/styles';

const useStyles  = (spinnerSize) => makeStyles({
    spinnerIcon: {
        width: spinnerSize, height: spinnerSize
    },
    spinnerWrapper: {
        width: spinnerSize,
        position: 'relative',
        margin: 'auto',
    },
    fabProgress: {
        color: "primary",
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
})();

export const SpinnerDownloading = ({spinnerSize, style, loading, children}) => {
    const classes = useStyles(spinnerSize);

    return (
        (children === undefined || loading) ?
            <div className={classes.spinnerWrapper} style={{...style}}>
                <LoadingIcon color="secondary" className={classes.spinnerIcon} />
                <CircularProgress
                    size={spinnerSize}
                    className={classes.fabProgress}
                />
            </div> :
            children
    );
};