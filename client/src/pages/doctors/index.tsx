import { Fragment, useState } from 'react';
import SearchDoctorForm from 'components/search-doctor-form';
import SearchDoctor from 'components/search-doctor';

const Doctors = () => {
	const [isSearch, setIsSearch] = useState<boolean>(false);

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
