import {getObjectValue} from "./objectValue";

export const calcPage = (allRows,  itemsPerPageSetting, currentPageNumOrLast, totalRecordFromServer) => {
    const result = {
        rows: [],
        pageList: [],
        allPages: [],
        rowsPerPageOptions: [5,10,20,40],
        pagingMessage: "No Records",
        hasError: false,
        errorMessage: "",
        errorMessageDetail: "",
        hasPaging: true,
        showPrevButton: true,
        showNextButton: true,
        currentPageNum: currentPageNumOrLast
    };
    const itemsPerPage = findNearest(result.rowsPerPageOptions, itemsPerPageSetting);

    try {
        const pagesToShow = 4;
        const calcTotalRecordCount = totalRecordFromServer || allRows.length;
        const calcTotalPages = Math.ceil(calcTotalRecordCount / itemsPerPage);

        for(let pageAllIndex = 1; pageAllIndex <= calcTotalPages; pageAllIndex++)
            result.allPages.push(pageAllIndex);

        result.hasPaging = calcTotalPages > 1;
        const currentPageNum = currentPageNumOrLast === true ? calcTotalPages : currentPageNumOrLast;
        result.currentPageNum = currentPageNum;
        let startPage = currentPageNum > 2 ? currentPageNum - 1 : 1;

        let calcIndexStart = 0;
        //if the page number exceeds the total number of pages or is less than zero go to page 1
        if(currentPageNum <= calcTotalPages && currentPageNum > 0)
            calcIndexStart = (currentPageNum -1 ) * itemsPerPage;
        else {
            startPage = 1;
            result.currentPageNum = 1;
        }

        let endPage = (startPage + pagesToShow - 1) < calcTotalPages ? startPage + pagesToShow - 1 : calcTotalPages;
        //check to make sure we have the correct number of pages showing.
        if((endPage - startPage) < pagesToShow -1 && calcTotalRecordCount > 0 && endPage >= pagesToShow) {
            startPage = endPage - pagesToShow + 1;
        }

        if(startPage < 0) startPage =1;

        for (let pageIndex = startPage; pageIndex <= endPage; pageIndex++) {
            result.pageList.push(pageIndex);
        }

        const endItemIndex = (calcIndexStart + itemsPerPage) < calcTotalRecordCount ? (calcIndexStart + itemsPerPage) : calcTotalRecordCount;
        result.pagingMessage = totalRecordFromServer > 0 || calcTotalRecordCount > 0 ?
            `${calcIndexStart + 1}-${endItemIndex} of ${calcTotalRecordCount}`
            : "No Data";
        result.totalRows = calcTotalRecordCount;
        result.itemsPerPage = itemsPerPage;
        result.rows = totalRecordFromServer ? allRows : allRows.slice(calcIndexStart, endItemIndex);
        result.showPrevButton = result.currentPageNum > 1;
        result.showNextButton = result.currentPageNum < calcTotalPages;
    } catch (ex) {
        result.hasError = true;
        result.pagingMessage = "ERROR";
        result.errorMessage = "Invalid input when creating table paging";
        result.errorMessageDetail = ex.message || ex;
        result.currentPageNum = 0;
    }
    return result;
};

export const sortItems = (itemList, sortField, isDescending) => {
    itemList.sort((aIn, bIn) => {
        const aValue = getObjectValue(aIn, sortField);
        const bValue = getObjectValue(bIn, sortField);

        if(aValue.toLowerCase && bValue.toLowerCase) {
            if (aValue.toLowerCase() < bValue.toLowerCase())
                return isDescending ? 1 : -1;

            if (aValue.toLowerCase() > bValue.toLowerCase())
                return isDescending ? -1 : 1;
        } else {
            if (aValue < bValue)
                return isDescending ? 1 : -1;

            if (aValue > bValue)
                return isDescending ? -1 : 1;
        }
        return 0;
    });
};

export const findNearest = (numList, target) =>
    numList.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
