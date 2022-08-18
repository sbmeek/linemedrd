import { PropsWithChildren } from "react";

interface ICalendar {
	height?: string;
	width?: string;
};


const CalendarIcon = <T extends PropsWithChildren<ICalendar>>(props: T) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 51.019 46.434"
			height={"1.2rem"}
			width={"1.2rem"}
			{...props}
		>
			<g data-name="Group 21" transform="translate(-217 -556)">
				<path
					data-name="Rectangle 40"
					d="M217 575.98h51.019v21.454a5 5 0 01-5 5H222a5 5 0 01-5-5V575.98z"
				/>
				<path
					data-name="Rectangle 41"
					d="M222 561.808h41.019a5 5 0 015 5v6.338H217v-6.338a5 5 0 015-5z"
				/>
				<rect
					data-name="Rectangle 51"
					width={4}
					height={14}
					rx={2}
					transform="translate(227 556)"
				/>
				<rect
					data-name="Rectangle 52"
					width={4}
					height={14}
					rx={2}
					transform="translate(254 556)"
				/>
			</g>
		</svg>
	);
}

export default CalendarIcon;
