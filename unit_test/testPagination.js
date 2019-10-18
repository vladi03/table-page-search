import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import {TablePagination} from "../src/tables/tableStandard/TablePagination";
import {IconButton} from '@material-ui/core'
import { ChevronLeft,FirstPage, ChevronRight, LastPage } from '@material-ui/icons';

describe('Pagination Load', () => {
    let curPage = -1;
    const wrapper = mount(<TablePagination hasPaging={true}
                                           pagingMessage={"1 of 999"}
                                           currentPageNum={2}
                                           pageList={[1,2,3,4]}
                                           onPageChange={(page)=> {curPage = page;}}
                                           showPrevButton={true}
                                           showNextButton={true}
                                           allPages={[1,2,3,4,5,6]}
                                           condensed={false}
    />);
    it("loaded",()=>{
        const buttons = wrapper.find("div");
        assert.strictEqual(buttons.length, 15, "# of DIVs");
    });

    it("paging buttons",()=>{
        const buttons = wrapper.find(IconButton);
        const firstPage = buttons.find(FirstPage);
        const prevPage = buttons.find(ChevronLeft);
        const nextPage = buttons.find(ChevronRight);
        const lastPage = buttons.find(LastPage);
        //''[id^="pageNumButton-"]'); //[id^="pageNum"]
        const pageNumberButtons = buttons.find('button.MuiIconButton-colorPrimary');

        assert.strictEqual(firstPage.length, 1, "first page button");
        assert.strictEqual(prevPage.length, 1, "prev page button");
        assert.strictEqual(nextPage.length, 1, "next page button");
        assert.strictEqual(lastPage.length, 1, "last page button");
        assert.strictEqual(pageNumberButtons.length, 4, "page number button");
        assert.strictEqual(buttons.length, 8, "# of page buttons");

        assert.deepStrictEqual(pageNumberButtons.at(0).props().style,
            { backgroundColor: '', color: '' });
        assert.deepStrictEqual(pageNumberButtons.at(1).props().style,
            { backgroundColor: '#428bca', color: 'white' });
    });

    it("paging button click", ()=> {
        const pageNumberButtons = wrapper.find('button.MuiIconButton-colorPrimary');
        const pageButton2 = pageNumberButtons.at(1);
        assert.strictEqual(curPage, -1);
        assert.strictEqual(pageNumberButtons.length, 4, "page number button");

        pageButton2.simulate("click");
        assert.strictEqual(curPage, 2);
    });

    it("first page button click", ()=> {
        const buttons = wrapper.find(IconButton);
        const firstPage = buttons.find(FirstPage);

        assert.strictEqual(curPage, 2);
        firstPage.simulate("click");
        assert.strictEqual(curPage, 1);
    });

    it("last page button click", ()=> {
        const buttons = wrapper.find(IconButton);
        const lastPage = buttons.find(LastPage);

        assert.strictEqual(curPage, 1);
        lastPage.simulate("click");
        assert.strictEqual(curPage, true);
    });
});