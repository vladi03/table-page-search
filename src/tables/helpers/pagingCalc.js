
export const calcPage = (allRows,  itemsPerPage, currentPageNumOrLast, ) => {
    const result = {
        rows: [],
        pageList: [],
        allPages: [],
        pagingMessage: "No Records",
        hasError: false,
        errorMessage: "",
        errorMessageDetail: "",
        hasPaging: true,
        showPrevButton: true,
        showNextButton: true,
        currentPageNum: currentPageNumOrLast
    };

    try {
        const pagesToShow = 4;
        const calcTotalPages = Math.ceil(allRows.length / itemsPerPage);
        for(let pageAllIndex = 1; pageAllIndex <= calcTotalPages; pageAllIndex++)
            result.allPages.push(pageAllIndex);

        result.hasPaging = calcTotalPages > 1;
        const currentPageNum = currentPageNumOrLast === true ? calcLastPageNumber(allRows.length, itemsPerPage) : currentPageNumOrLast;
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
        if((endPage - startPage) < pagesToShow -1 && allRows.length > 0 && endPage >= pagesToShow) {
            startPage = endPage - pagesToShow + 1;
        }

        if(startPage < 0) startPage =1;

        for (let pageIndex = startPage; pageIndex <= endPage; pageIndex++) {
            result.pageList.push(pageIndex);
        }

        const endItemIndex = (calcIndexStart + itemsPerPage) < allRows.length ? (calcIndexStart + itemsPerPage) : allRows.length;
        result.pagingMessage = allRows.length > 0 ? `${calcIndexStart + 1}-${endItemIndex} of ${allRows.length}`: "No Data";

        result.rows = allRows.slice(calcIndexStart, endItemIndex);
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

export const calcLastPageNumber = (rowCount, itemsPerPage) => {
    return Math.ceil(rowCount / itemsPerPage);
};

export const sortItems = (itemList, sortField, isDescending) => {
    itemList.sort((a, b) => {
        if(a[sortField].toLowerCase && b[sortField].toLowerCase) {
            if (a[sortField].toLowerCase() < b[sortField].toLowerCase())
                return isDescending ? 1 : -1;

            if (a[sortField].toLowerCase() > b[sortField].toLowerCase())
                return isDescending ? -1 : 1;
        } else {
            if (a[sortField] < b[sortField])
                return isDescending ? 1 : -1;

            if (a[sortField] > b[sortField])
                return isDescending ? -1 : 1;
        }
        return 0;
    });
};
