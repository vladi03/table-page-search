import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import {TablePaging, mockUsers, headerConfig} from "../src/tables";

describe('Demo Table Load', () => {

    const wrapper = mount(<TablePaging loading={false}
                                       dataList={mockUsers}
                                       headerConfig={headerConfig}
                                       filterText={""}
                                       tableStyleName={"stripe-table"}
        //searchFunction={(dataList) => this.searchName(dataList)}
    />);

    const getCellValue = (row,column, wrap) => {
        const wrapCalc = wrap || wrapper;
        const rows = wrapCalc.find("tbody tr.MuiTableRow-root");
        const columns = rows.at(row).find(".MuiTableCell-root");
        const cell1 = columns.at(column).props();
        return cell1.children.props.children;
    };

    it("loaded", () => {
        //const tableRows = wrapper.find(".MuiTableRow-root");
        const rows = wrapper.find("tbody tr.MuiTableRow-root");
        assert.strictEqual(rows.length, 10, "table loaded");
    });

    it("initial sort order", ()=> {
        assert.strictEqual(getCellValue(0,1),"Amie");
        assert.strictEqual(getCellValue(0,2),"Shepherd");
        assert.strictEqual(getCellValue(0,3),"Catherine");
        assert.strictEqual(getCellValue(0,4),"Shepherd, Amie");
        assert.strictEqual(getCellValue(9,1),"Lacy");
    });

    it("sort table", ()=> {
        const rows = wrapper.find("thead tr.MuiTableRow-root");
        const columns = rows.at(0).find(".MuiTableCell-root");
        const column2 = columns.at(2).find(".MuiButtonBase-root");
        column2.simulate("click");

        assert.strictEqual(rows.length, 1, "header row");
        assert.strictEqual(columns.length, 5, "header row");
        assert.strictEqual(getCellValue(0,0), 16);
        assert.strictEqual(getCellValue(0,2),"Abbott");
    });

    it("filter", ()=>{
        const wrapperSearch = mount(<TablePaging loading={false}
                                           dataList={mockUsers}
                                           headerConfig={headerConfig}
                                           filterText={"alv"}
                                           tableStyleName={"stripe-table"}
            //searchFunction={(dataList) => this.searchName(dataList)}
        />);

        const rows = wrapperSearch.find("tbody tr.MuiTableRow-root");
        assert.strictEqual(rows.length, 1, "table loaded");
        assert.strictEqual(getCellValue(0,1, wrapperSearch),"Lakisha");
    });
});
