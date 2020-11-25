import { GlobalStyle } from './global.style';
import Routes from './Routes';
import line from 'assets/icons/line.svg';
import bacteria from 'assets/icons/bacteria.svg';
import stethoscope from 'assets/icons/etetocopio.svg';
import cruz from 'assets/icons/cruz.svg';
import heart from 'assets/icons/heart.svg';
import emergency from 'assets/icons/emergency-call.svg';
import dna from 'assets/icons/dna.svg';
import syringe from 'assets/icons/syringe.svg';
import {
	Line,
	Contaback,
	Bacteria,
	Stethoscope,
	Cruz,
	Heart,
	Emergency,
	Dna,
	Syringe
} from './App.style';

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes />

			<Line src={line} alt="trazo" />
			<Contaback>
				<Heart src={heart} />
				<Bacteria src={bacteria} />
				<Cruz src={cruz} />
				<Emergency src={emergency} />
				<Dna src={dna} />
				<Stethoscope src={stethoscope} />
				<Syringe src={syringe} />
			</Contaback>
		</>
	);
}

export default App;
