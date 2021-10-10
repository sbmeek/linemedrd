import { Component, ElementType } from 'react';

export default function asyncComponent(
	importComponent: () => PromiseLike<{ default: ElementType | any }>
) {
	class AsyncComponent extends Component<
		{},
		{ component: ElementType | null }
	> {
		constructor(props: {}) {
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
