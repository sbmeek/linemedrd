import { Fragment, useEffect, useState } from 'react';
import SearchDoctorForm from 'components/search-doctor-form';
import SearchDoctor from 'components/search-doctor';
import { useQuery } from '@apollo/client';
import { GET_LIST_DOCTORS } from 'graphql';
import { Doctor } from 'graphql/types';

const Doctors = () => {
	const [isSearch, setIsSearch] = useState<boolean>(false);

	const { data, loading } = useQuery<{ doctors: Doctor[] }>(GET_LIST_DOCTORS);

	return (
		<div>
			{isSearch ? (
				<SearchDoctorForm setIsSearch={setIsSearch} />
			) : loading ? (
				<h2>Loading...</h2>
			) : (
				<SearchDoctor setIsSearch={setIsSearch} doctors={data?.doctors} />
			)}
		</div>
	);
};

export default Doctors;
