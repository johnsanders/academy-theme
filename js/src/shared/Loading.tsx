import React from 'react';

interface Props {
	visible?: boolean;
}

const Loading: React.FC<Props> = (props: Props): JSX.Element => {
	const visible = props.visible === undefined ? true : props.visible;
	const elRef = React.useRef<HTMLDivElement>();
	React.useEffect(() => {
		if (!visible && elRef.current) {
			elRef.current.style.transition = 'opacity 0.25s';
			elRef.current.style.opacity = '0';
			setTimeout(() => {
				if (elRef.current) elRef.current.classList.add('d-none');
			});
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
