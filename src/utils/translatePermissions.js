export const translatePermissions = (permission) => {

    let name_permission = ''

    switch (permission) {

        case 'create':
            name_permission = 'создание';
            break;
        case 'insert':
            name_permission = 'запись';
            break;
        case 'read':
            name_permission = 'чтение';
            break;
        case 'update':
            name_permission = 'обновление';
            break;
        case 'delete':
            name_permission = 'удаление';
            break;
    }

    return name_permission;
}

export default translatePermissions();