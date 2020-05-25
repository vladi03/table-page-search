import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

// noinspection JSUnusedGlobalSymbols
export const NoData = ({dataCount, children})=> (
    dataCount === 0 &&
    <Chip
        avatar={
            <Avatar>
                <LibraryBooks />
            </Avatar>
        }
        label="No Data"
    />
    || children
);

export const ListNoData = ({dataCount, containerClass, className, children})=> (
    <div className={containerClass}>
        {dataCount === 0 &&
        <ListItem className={className}>
            <ListItemText>
                <Chip
                    avatar={
                        <Avatar>
                            <LibraryBooks />
                        </Avatar>
                    }
                    label="No Data"
                />
            </ListItemText>
        </ListItem>
        || children
        }
    </div>
);