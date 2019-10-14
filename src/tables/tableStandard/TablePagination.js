import React from "react";
import { Typography, IconButton,FormControl, Select} from '@material-ui/core';
import { ChevronLeft,FirstPage, ChevronRight, LastPage } from '@material-ui/icons';
import { useStyles } from "./PaginationStype";

export const TablePagination = (
    { pageList, pagingMessage, currentPageNum,
      onPageChange, showPrevButton, showNextButton,
      allPages, hasPaging, condensed
    }) => {

    const classes = useStyles();

    return (
        hasPaging &&
        <div className={classes.root}>
            <div className={classes.containerHalfLeft}>
                <div className={classes.pagingMessageContainer}>
                    <Typography className={classes.pagingMessage}>
                        {condensed ?
                            <span> {pagingMessage} Go to :</span>
                            :
                            <span>Showing {pagingMessage} records,  Go to :</span>
                        }
                    </Typography>
                </div>
                <div className={classes.pagingMessageContainer}>
                    <FormControl>
                        <Select
                            className={classes.formControl}
                            native
                            value={currentPageNum}
                            onChange={(event) => onPageChange(parseInt(event.target.value))}
                        >
                            {allPages.map((pageNum, index) => (<option key={index} value={pageNum}>{pageNum}</option>))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className={classes.containerHalfRight}>
                <div className={classes.pageButtonsContainer}>
                    <IconButton disabled={!showPrevButton} className={classes.pageButtonEndLeft}
                                onClick={() => onPageChange(1)}>
                        <FirstPage className={classes.pageButtonsIconsText} fontSize="small"/>
                    </IconButton>
                </div>
                <div className={classes.pageButtonsContainer}>
                    <IconButton disabled={!showPrevButton} className={classes.pageButton}
                                onClick={() => onPageChange(currentPageNum - 1)}>
                        <ChevronLeft className={classes.pageButtonsIconsText} fontSize="small"/>
                    </IconButton>
                </div>
                {pageList.map((page, index) => (
                    <div key={index} className={classes.pageButtonsContainer}>
                        <IconButton className={classes.pageButton}
                                    onClick={() => onPageChange(page)}
                                    color="primary"
                                    style={{
                                        backgroundColor: page === currentPageNum ? "#428bca" : "",
                                        color: page === currentPageNum ? "white" : ""
                                    }}
                        >
                            <span className={classes.pageButtonsText}>{page}</span>
                        </IconButton>
                    </div>))}
                <div className={classes.pageButtonsContainer}>
                    <IconButton disabled={!showNextButton} className={classes.pageButton}
                                onClick={() => onPageChange(currentPageNum + 1)}>
                        <ChevronRight className={classes.pageButtonsIconsText} fontSize="small"/>
                    </IconButton>
                </div>
                <div className={classes.pageButtonsContainer}>
                    <IconButton disabled={!showNextButton} className={classes.pageButtonEndRight}
                                onClick={() => onPageChange(true)}>
                        <LastPage className={classes.pageButtonsIconsText} fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};