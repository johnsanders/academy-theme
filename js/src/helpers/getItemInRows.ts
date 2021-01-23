import { Row, RowItem } from '../types';

interface ItemInfo {
	item: RowItem;
	itemIndex: number;
	row: Row;
}

const getItemInRows = (id: string, rows: Row[]): ItemInfo | null => {
	for (const row of rows) {
		for (const item of row.items) {
			if (item.id === id)
				return {
					item,
					itemIndex: row.items.indexOf(item),
					row,
				};
		}
	}
	return null;
};

export default getItemInRows;
