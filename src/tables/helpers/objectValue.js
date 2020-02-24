
export const getObjectValue = (targetObject, fieldName) => {
    const childFields = fieldName.split('.');
    //get to the property value by iterating through the object structure
    let propValue = targetObject;
    for (let index in childFields) {
        // noinspection JSUnfilteredForInLoop
        propValue = propValue[childFields[index]];
    }
    return propValue;
};

export const getObjectJoin = (targetObject) => {
    return Object.values(targetObject).map((item) => typeof(item) === "object" ? getObjectJoin(item) : item).join();
};