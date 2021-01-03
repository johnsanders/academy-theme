import '../../shared/style.css';
import '../style.css';
import CollectionRowEditContainer from '../gridTab/edit/row/CollectionRowEditContainer';
import React from 'react';
import { Tag } from '../../types';
import { action } from '@storybook/addon-actions';
import injectConfig from './injectConfig';

declare global {
	interface Window {
		cnnAcademy: any;
	}
}

const actions = {
	handleCancel: action('handleCancel'),
	handleSaveCollectionRow: action('handleSaveCollectionRow'),
	updateTags: action('updateTags'),
};

const tags: Tag[] = [
	{
		color: '#808080',
		id: '1',
		name: 'Tag 1',
		thumbUrl: 'https://picsum.photos/480/270?rand=1',
	},
	{
		color: '#F08080',
		id: '2',
		name: 'Tag 2',
		thumbUrl: 'https://picsum.photos/480/270?rand=2',
	},
	{
		color: '#80F080',
		id: '3',
		name: 'Tag 3',
		thumbUrl: 'https://picsum.photos/480/270?rand=3',
	},
	{
		color: '#8080F0',
		id: '4',
		name: 'Tag 4',
		thumbUrl: 'https://picsum.photos/480/270?rand=4',
	},
];

export default {
	title: 'themeSettings/CollectionRowEditContainer',
};

export const initialState = (): JSX.Element => {
	window.cnnAcademy = injectConfig;
	return <CollectionRowEditContainer {...actions} allTags={tags} initialValues={[]} />;
};
