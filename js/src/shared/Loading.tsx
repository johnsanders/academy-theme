import React from 'react';

interface Props {
	visible?: boolean;
}

const Loading: React.FC<Props> = (props: Props): JSX.Element => {
	const visible = props.visible || props.visible === undefined;
	const elRef = React.useRef<HTMLDivElement>();
	React.useEffect(() => {
		if (elRef.current && !visible) {
			elRef.current.style.opacity = '0';
			const timeout = window.setTimeout(() => {
				if (elRef.current) elRef.current.classList.add('d-none');
			}, 250);
			return () => clearTimeout(timeout);
		}
	}, [visible]);
	return (
		<div
			className="academyLoader"
			ref={(el) => {
				if (el) elRef.current = el;
			}}
		>
			<div id="loaderBox"></div>
		</div>
	);
};

export default Loading;
