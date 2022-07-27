import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { dataQuery } from './useQueryLocation-types';

export const useQueryLocation = () => {
	const { search } = useLocation();

	return useMemo(() => {
		const dataQuery = new URLSearchParams(search);
		const data: dataQuery = {};

		dataQuery.forEach((value: string, key: string) => {
			data[key] = value;
		});

		return data;
	}, [search]);
};
