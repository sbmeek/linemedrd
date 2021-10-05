import { Component } from 'react';

/**
 * @param {() => PromiseLike<{default: any;}> | {default: any;}} importComponent
 */
export default function asyncComponent(importComponent) {
	class AsyncComponent extends Component {
		constructor(props) {
			super(props);
			this.state = { component: null };
		}

		async componentDidMount() {
			const { default: component } = await importComponent();
			this.setState({ component });
		}

		render() {
			const { component: DynComponent } = this.state;
			return DynComponent ? <DynComponent {...this.props} /> : null;
		}
	}

	return AsyncComponent;
}
