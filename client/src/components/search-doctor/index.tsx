import { useQueryLocation } from 'hooks/useQueryLocation';
import { SharedContainer } from 'shared/shared-container';
import Title from 'shared/title';

const HomeDr = () => {
	let query = useQueryLocation();

	console.log(query);

	return (
		<SharedContainer>
			<Title>Listado doctores</Title>
		</SharedContainer>
	);
};

export default HomeDr;
