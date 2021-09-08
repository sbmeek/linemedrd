import ExclamationIcon from '@/assets/icon/exclamation_icon/ExclamationIcon';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { ArrowPopper, ContentPopper, Emergente } from './InputPopper.styles';

const InputPopper = props => {
	const { elementReference } = props;

	const [popperElement, setPopperElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);

	const { styles, attributes } = usePopper(elementReference, popperElement, {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [78, 22]
				}
			},
			{
				name: 'arrow',
				options: {
					element: arrowElement,
					padding: 5
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
				<ArrowPopper
					id="arrow"
					ref={setArrowElement}
					style={styles.arrow}
					data-popper-arrow
				/>
				<div className="icon-content">
					<div className="icon-popper">
						<ExclamationIcon />
					</div>
				</div>
				<div>Por favor rellene este campo</div>
				{/* <div>Su nombre debe contener un minimo de 4 caracteres</div> */}
			</ContentPopper>
		</Emergente>
	);
};

export default InputPopper;
