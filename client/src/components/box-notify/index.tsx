import { PropsWithChildren } from 'react';
import {
	ContentNotify,
	ContainerNotify,
	LinkButton,
	SubTitleNotify,
	TitleNotify
} from './style';

interface IPropsNotify {
	title: string;
	subTitle: string;
	link: string;
	linkName?: string;
}

export const BoxNotify: <T extends PropsWithChildren<IPropsNotify>>(
	info: T
) => JSX.Element = ({ title, subTitle, link, linkName }) => {
	return (
		<ContentNotify>
			<ContainerNotify>
				<TitleNotify>{title}</TitleNotify>
				<SubTitleNotify>{subTitle}</SubTitleNotify>
			</ContainerNotify>
			<LinkButton to={link}>{linkName ?? 'Comenzar'}</LinkButton>
		</ContentNotify>
	);
};
