import React, {useState} from "react";
import {SpinnerDownloading} from "../extras/SpinnerDownloading";
import {TableSkeletonPaging} from "./TableSkeletonPaging";
import {TableRow ,TableCell} from "@material-ui/core";
import { TableHeaderSort } from "./TableHeaderSort";
import {calcPage, sortItems} from "../helpers/pagingCalc";

export const TablePaging = ({loading, dataList, headerConfig, filterText}) => {
    const itemsPerPage = 10;




    const [sortField, setSortField]= useState(headerConfig.columns[0].fieldForSort);
    const [sortDescending, setSortDescending]= useState(false);
    const [paging, setPaging] = useState(() => {
        sortItems(dataList, headerConfig.columns[0].fieldForSort, false);
        return calcPage(dataList,10, 1);
    });
    const [filteredList, setFilteredList ] = useState(dataList);
    const [lastFilterText, setLastFilterText ] = useState("");

    if(filterText !== lastFilterText) {
        const filtered= dataList.filter((item) =>
            Object.values(item).join().toLowerCase().indexOf(filterText) > -1 );
        sortItems(filtered, sortField, sortDescending);
        setFilteredList(filtered);
        setLastFilterText(filterText);
        setPaging(calcPage(filtered,10, 1));
    }

    const onSetSortField = (newSortField) => {
        const isDescending = newSortField === sortField && !sortDescending;

        //const filterResults = filterText.length === 0 ? dataList
        //    : dataList; //add the filter function here

        sortItems(filteredList, newSortField, isDescending);

        setSortDescending(isDescending);
        setSortField(newSortField);
        setPaging(calcPage(filteredList, itemsPerPage, 1));
    };

    const onPageChange = (newPage) => {
        //const filterResults = filterText.length === 0 ? dataList
        //    : dataList; //add the filter function here

        setPaging(calcPage(filteredList, itemsPerPage, newPage));
    };

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
                tableRows={tableRows()}
                tableHeader={tableHeader}
                condensed={false}
                onPageChange={onPageChange}
            />
        </SpinnerDownloading>
    )
};

export const tableRows = () => {

    return (row, index) => (
        <TableRow key={index} style={{height: 39}}>
            <TableCell style={{fontSize: "14px"}} >
                <span>{row.firstName}</span>
            </TableCell>
            <TableCell style={{fontSize: "14px"}} >
                <span>{row.lastName}</span>
            </TableCell>
            <TableCell style={{fontSize: "14px"}} >
                <span>{row.location}</span>
            </TableCell>
        </TableRow>
    );
};