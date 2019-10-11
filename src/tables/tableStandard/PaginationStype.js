import React from "react";
import { makeStyles  } from '@material-ui/styles';

export const useStyles = makeStyles({
    root: {
        width: '100%',
        display: "flex",
        marginTop: "10px",
    },
    containerHalfLeft: {
        width: "50%",
        display: "flex",
        justifyContent: "flex-start",
        marginLeft: "10px",
    },
    containerHalfRight: {
        width: "50%",
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: 15,
    },
    mainText: {
        fontSize: 15,
        lineHeight: "36px",
    },
    pagingMessageContainer: {
        alignSelf: "flex-start",
        minHeight: "36px",
        textAlign: "right",
        marginRight: "10px",
    },
    pagingMessage: {
        fontSize: "14px",
        lineHeight: "36px",
    },
    formControl: {
        fontSize: "14px",
    },
    column: {
        flexBasis: '10%',
        minHeight: "36px",
    },
    pageButtonsContainer: {
        textAlign: "center",
        width: 33,
    },
    pageButtonsText: {
        marginTop: "-2px"
    },
    pageButtonsIconsText: {
        marginTop: "-1px"
    },
    pageButton: {
        padding: "8px",
        lineHeight: "23px",
        width:"33.79px",
        height: "34px",
        fontSize: "14px",
        borderRadius: 0,
        backgroundColor: "white",
        color: "blue",
        border: "1px solid #ddd",
    },
    pageButtonEndLeft: {
        padding: "8px",
        lineHeight: "23px",
        width:"33.79px",
        height: "34px",
        fontSize: "14px",
        borderRadius: 0,
        backgroundColor: "white",
        color: "blue",
        border: "1px solid #ddd",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
    },
    pageButtonEndRight: {
        padding: "8px",
        lineHeight: "23px",
        width:"33.79px",
        height: "34px",
        fontSize: "14px",
        borderRadius: 0,
        backgroundColor: "white",
        color: "blue",
        border: "1px solid #ddd",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
    }
});