import ExclamationIcon from '@/assets/icon/exclamation_icon/ExclamationIcon';
import { useState } from 'react';
import {
	ContainerPopper,
	ContentPopper,
	ArrowPopper
} from './FormErrorPopper.styles';

const FormErrorPopper = ({ anchorEl, open, message }) => {
	const [arrow, setArrow] = useState(null);

	return (
		<ContainerPopper
			placement="bottom-end"
			open={open}
			anchorEl={anchorEl}
			disablePortal={false}
			modifiers={{
				flip: {
					enabled: false
				},
				preventOverflow: {
					enabled: false,
					boundariesElement: 'scrollParent'
				},
				arrow: {
					enabled: true,
					element: arrow
				}
			}}
		>
			<ContentPopper>
				<ArrowPopper ref={setArrow} />
				<div className="icon-content">
					<div className="icon-popper">
						<ExclamationIcon />
					</div>
				</div>
				<div>{message}</div>
			</ContentPopper>
		</ContainerPopper>
	);
};

export default FormErrorPopper;
