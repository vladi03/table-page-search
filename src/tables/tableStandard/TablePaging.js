import React from "react";
import {SpinnerDownloading} from "../extras/SpinnerDownloading";

export const TablePaging = ({loading}) => {

    return (
        <SpinnerDownloading spinnerSize={40} loading={loading}>
            Test data
        </SpinnerDownloading>
    )
};