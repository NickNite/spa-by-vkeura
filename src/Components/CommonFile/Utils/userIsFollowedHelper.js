
export const userIsFollowed = (items, userId, objName, newObjProps) => {
    return items.map(item => {
        if (item[objName] === userId) {
            return { ...item, ...newObjProps }
        }
        return item;
    })
};



