import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import {TableDemo} from "../src/tables";
import {TableRow} from '@material-ui/core'
import {TablePaging, mockUsers, headerConfig, TableSkeletonPaging} from "../src/tables";

describe('Demo Table Load', () => {
    let curPage = -1;
    const wrapper = mount(<TablePaging loading={false}
                                       dataList={mockUsers}
                                       headerConfig={headerConfig}
                                       filterText={""}
                                       tableStyleName={"stripe-table"}
        //searchFunction={(dataList) => this.searchName(dataList)}
    />);
    it("loaded", () => {
        const tableRows = wrapper.find(".MuiTableRow-root");
        assert.strictEqual(tableRows.length, 11, "table loaded");
    });

    it("initial sort order", ()=> {
        const firstRows = wrapper.find("tbody tr.MuiTableRow-root");
        const columns = firstRows.find("span");
        console.log(columns.at(1).props());

        assert.strictEqual(firstRows.length, 10, "table loaded");
        assert.strictEqual(columns.length, 3, "table loaded");
    });
});
