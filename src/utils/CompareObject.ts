export const compareTwoObject = (obj1: any, obj2: any) => {
    // Kiểm tra số lượng thuộc tính
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    // So sánh từng thuộc tính
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
};

export const compareFieldValues = (obj1: any, obj2: any, fields: any[]) => {
    for (let field of fields) {
        if (obj1[field] !== obj2[field]) {
            return false;
        }
    }

    return true;
};
