import { Fragment, useEffect, useState } from 'react';
import SearchDoctorForm from 'components/search-doctor-form';
import SearchDoctor from 'components/search-doctor';
import { useQuery } from '@apollo/client';
import { GET_LIST_DOCTORS } from 'graphql';
import { Doctor } from 'graphql/types';

const Doctors = () => {
	const [isSearch, setIsSearch] = useState<boolean>(false);

	const { data, error, loading } = useQuery<Doctor>(GET_LIST_DOCTORS);

	useEffect(() => {
		console.log(data, error, loading);
	}, [data]);

	return (
		<div>
			{isSearch ? (
				<SearchDoctorForm setIsSearch={setIsSearch} />
			) : (
				<SearchDoctor setIsSearch={setIsSearch} />
			)}
		</div>
	);
};

export default Doctors;
