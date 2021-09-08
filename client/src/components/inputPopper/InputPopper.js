import ExclamationIcon from '@/assets/icon/exclamation_icon/ExclamationIcon';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { ContentPopper, Emergente } from './InputPopper.styles';

const InputPopper = props => {
	const { elementReference } = props;

	const [popperElement, setPopperElement] = useState(null);

	console.log(elementReference);

	const { styles, attributes } = usePopper(elementReference, popperElement, {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [85, 15]
				}
			}
		]
	});

	// const handlePopper = () => {
	// 	setPopperOpen(open => !open);
	// };

	return (
		<Emergente
			ref={setPopperElement}
			style={styles.popper}
			{...attributes.popper}
		>
			<ContentPopper>
				<div className="icon-content">
					<div className="icon-popper">
						<ExclamationIcon />
					</div>
				</div>
				<div>
					Este es el popper yo no recuerdo nada todo bien por el momento
				</div>
			</ContentPopper>
			<div style={styles.arrow}></div>
		</Emergente>
	);
};

export default InputPopper;
