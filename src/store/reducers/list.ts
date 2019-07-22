import { Reducer } from 'redux';
import { TListItem, myAction } from '../../custom_types';

const defaultListData: Array<TListItem> = [
    {
        "title": "Заголовок 1",
        "attributes": ["Пункт 1.1", "Пункт 1.2", "Пункт 1.3"],
        "description": "Описание 1 блока"
    },
    {
        "title": "Заголовок 2",
        "attributes": ["Пункт 2.1", "Пункт 2.2"],
        "description": "Описание 2 блока"
    },
    {
        "title": "Заголовок 3",
        "attributes": ["Пункт 3.1", "Пункт 3.2", "Пункт 3.3"],
        "description": "Описание 3 блока"
    },
    {
        "title": "Заголовок 4",
        "attributes": ["Пункт 4.1", "Пункт 4.2", "Пункт 4.3", "Пункт 4.4", "Пункт 4.5"],
        "description": "Описание 4 блока"
    },
    {
        "title": "Заголовок 5",
        "attributes": ["Пункт 5.1"],
        "description": "Описание 5 блока"
    },
    {
        "title": "Заголовок 6",
        "attributes": ["Пункт 6.1", "Пункт 6.2", "Пункт 6.3"],
        "description": "Описание 6 блока"
    }
];

const reducer: Reducer<Array<TListItem>, myAction<TListItem>> = (listData = defaultListData, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...listData, action.payload];

        case 'MOVE_TO_BEGIN':
            const last = listData.pop() as TListItem;
            return [last, ...listData];

        case 'MOVE_TO_END':
            const [first, ...rest] = listData;
            rest.push(first);
            return rest;

        case 'DELETE_LAST':
            listData.pop();
            return [...listData];

        case 'DELETE_FIRST':
            const [_, ...rrest] = listData;
            return rrest;

        default:
            return listData;
    }
};

export default reducer;