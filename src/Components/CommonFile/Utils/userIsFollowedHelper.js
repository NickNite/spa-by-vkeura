// Функция для проверки подписан ли пользователь на других юзеров (Function to check if the user is subscribed to other users)
export const userIsFollowed = (items, userId, objName, newObjProps) => {
    return items.map(item => {
        if (item[objName] === userId) {
            return { ...item, ...newObjProps }
        }
        return item;
    })
};



