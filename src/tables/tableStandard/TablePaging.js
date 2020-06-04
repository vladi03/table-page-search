import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {SpinnerDownloading} from "../extras/SpinnerDownloading";
import {TableSkeletonPaging} from "./TableSkeletonPaging";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {makeStyles} from "@material-ui/core/styles";

import { TableHeaderSort } from "./TableHeaderSort";
import {calcPage, sortItems} from "../helpers/pagingCalc";
import {getObjectValue, getObjectJoin} from "../helpers/objectValue";

export const TablePaging = ({loading, dataList, headerConfig, filterText, tableStyleName,
                                searchFunction, onRowClick, condensed, onServerSidePaging,
                                totalRecordsFromServer, restPageNumber, useMaterialUiPaging
                            }) => {
    const [itemsPerPage, setItemsPerPage] = useState(headerConfig.itemsPerPage || 10);
    const [sortField, setSortField]= useState(headerConfig.defaultSort || headerConfig.columns[0].fieldForSort);
    const [sortDescending, setSortDescending]= useState(headerConfig.sortDescending || false);
    const [activePage, setActivePage] = useState(1);
    const filterTextLower  = filterText && filterText.toLowerCase();

    useEffect(() => {
        if(restPageNumber > 0)
            setActivePage(restPageNumber);
    }, [restPageNumber]);

    let filteredList = [];
    if(filterText && filterText.length > 0) {
        filteredList = searchFunction ? searchFunction(dataList) : dataList.filter((item) => {
            return item && getObjectJoin(item).toLowerCase().indexOf(filterTextLower) > -1;//.indexOf(filterText.toLowerCase()) > -1;
        });
    } else {
        filteredList = [...dataList];
    }


    const onSetSortField = (newSortField) => {
        const isDescending = newSortField === sortField && !sortDescending;
        setSortDescending(isDescending);
        setSortField(newSortField);
        if(onServerSidePaging)
            onServerSidePaging({
                sortField: newSortField,
                sortDescending: isDescending,
                itemsPerPage, activePage
            });
    };

    const onPageChange = (newPage, newItemsPerPage) => {
        setActivePage(newPage);
        if(newItemsPerPage > 0)
            setItemsPerPage(newItemsPerPage);

        if(onServerSidePaging)
            onServerSidePaging({
                sortField,
                sortDescending,
                itemsPerPage,
                activePage : newPage
            });
    };

    if(!onServerSidePaging)
        sortItems(filteredList, sortField, sortDescending);
    const paging = calcPage(filteredList, itemsPerPage, activePage, totalRecordsFromServer);

    const tableHeader =(
        <TableHeaderSort headerConfig={headerConfig}
                         sortField={sortField}
                         sortDescending={sortDescending}
                         onSetSortField={onSetSortField}
        />);

    return (
        <SpinnerDownloading spinnerSize={50} loading={loading}>
            <TableSkeletonPaging
                paging={paging}
                tableRows={tableRows(headerConfig, onRowClick)}
                tableHeader={tableHeader}
                condensed={condensed}
                onPageChange={onPageChange}
                tableStyleName={tableStyleName}
                useMaterialUiPaging={useMaterialUiPaging  || false}
            />
        </SpinnerDownloading>
    )
};

TablePaging.propTypes = {
    loading: PropTypes.bool,
    dataList: PropTypes.array.isRequired,
    headerConfig: PropTypes.object.isRequired,
    filterText: PropTypes.string,
    tableStyleName: PropTypes.string,
    searchFunction: PropTypes.func,
    onRowClick: PropTypes.func,
    condensed: PropTypes.bool,
};

export const tableRows = (headerConfig, onItemClick) => {
    const classes = useStyles();
    const [selectedRowId, setSelectedRowId ] = useState(null);
    let warningWasShown = false;

    const getValue = (row, header, onSelectRow) => {
        const hasValue = !!(header.display || header.fieldForSort);

        if(!(warningWasShown || hasValue)) {
            console.warn(`Column "${header.columnLabel}" must have a "display" or "fieldSort" field`);
            warningWasShown = true;
        }

        return hasValue ? header.display ? header.display(row, header, onSelectRow) :
            (header.fieldForSort !== undefined && getObjectValue(row, header.fieldForSort))
            : "";
    };

    const onSelectRow = (row)=> {
        if(headerConfig.key)
            setSelectedRowId(row[headerConfig.key]);
        onItemClick(row)
    };

    return (row, index) => {
        const hasClick = !!onItemClick;

        /** @namespace header.cellStyle */
        return (
            <TableRow key={index}
                      className={hasClick ? classes.rowWithClick : classes.rowWithoutClick}
                      >
                {headerConfig.columns.map((header, index) => (
                    <TableCell key={index}
                               onClick={() => hasClick && !header.display ? onSelectRow(row) : undefined}
                               className={hasClick && !header.display ? classes.cellWithClick : null}
                               style={{
                                        fontSize: 14,
                                        backgroundColor: selectedRowId !== null && headerConfig.key &&
                                        selectedRowId === row[headerConfig.key] && "#cfcdd1",
                                        ...header.cellStyle
                                    }}
                    >
                        <span>{getValue(row, header, onSelectRow)}</span>
                    </TableCell>
                ))}
            </TableRow>
        );
    };
};

//'&:hover': {
const useStyles = makeStyles({
    rowWithoutClick:{
        height: 39
    },
    rowWithClick:{
        height: 39,
        '&:hover': {
            backgroundColor: "#fafaf9"
        }
    },
    cellWithClick: {
        cursor: "pointer"
    }
});