import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import {
	Container,
	Title,
	SearchField,
	ErrUsersNotFound,
	TableWrapper,
	Table,
	TableHead,
	Td
} from './AdminCP.style';
import axios from 'axios';
import NativeSelect from '@material-ui/core/NativeSelect';

let timerID;

export default function AdminCP() {
	const [isSearchFieldOnInputMode, setIsSearchFieldOnInputMode] = useState(
		false
	);
	const [users, setUsers] = useState([]);
	const searchFieldRef = useRef(null);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('/admin/readAll');
			setUsers([...data.users]);
		})();
	}, []);

	useEffect(() => {
		if (isSearchFieldOnInputMode) {
			searchFieldRef.current.focus();
		}
	}, [isSearchFieldOnInputMode]);

	const handleSearchFieldChange = (e) => {
		const { value } = e.target;
		setIsSearchFieldOnInputMode(value.length >= 1);
		clearTimeout(timerID);
		timerID = setTimeout(async () => {
			const { data } = await axios.post('/admin/searchByName', {
				qry: value
			});
			console.log(data);
			setUsers([...data.foundUsers]);
		}, 600);
	};

	const handleRoleChange = async (e, userId) => {
		const { value } = e.target;
		setUsers((oldUsers) => {
			const selectedUserIndex = oldUsers.findIndex((u) => u._id === userId);
			oldUsers[selectedUserIndex].Role = value;
			return [...oldUsers];
		});
		await axios.put(`/admin/updateRole/${userId}`, { role: value });
	};

	return (
		<Container>
			<Title>Panel de Administraci&oacute;n</Title>
			<SearchField
				type={isSearchFieldOnInputMode ? 'text' : 'button'}
				isSearchFieldOnInputMode={isSearchFieldOnInputMode}
				onMouseDown={() => setIsSearchFieldOnInputMode(true)}
				onBlur={handleSearchFieldChange}
				onChange={handleSearchFieldChange}
				ref={searchFieldRef}
			></SearchField>
			{users.length === 0 ? (
				<ErrUsersNotFound>No se han encontrado usuarios.</ErrUsersNotFound>
			) : (
				<TableWrapper>
					<TableHead>
						<span>ID</span>
						<span>Nombre</span>
						<span>Email</span>
						<span>Rol</span>
					</TableHead>
					<Table>
						<tbody>
							{users.map((user, idx) => (
								<tr key={idx}>
									<Td title={user._id}>{user._id}</Td>
									<Td title={user.name}>{user.name}</Td>
									<Td title={user.email}>{user.email}</Td>
									<Td isRoleTd>
										<NativeSelect
											value={user.Role}
											onChange={(e) => handleRoleChange(e, user._id)}
										>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
										</NativeSelect>
									</Td>
								</tr>
							))}
						</tbody>
					</Table>
				</TableWrapper>
			)}
		</Container>
	);
}
