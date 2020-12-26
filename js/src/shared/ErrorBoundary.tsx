import React, { ErrorInfo, ReactNode } from 'react';

type Props = {
	errorMessage?: string;
	handleError?: (error: Error, errorInfo: ErrorInfo) => void;
	id?: string;
	[key: string]: any;
};
interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
		console.log(props.handleError, props.errorMessage);
		this.componentDidCatch.bind(this);
	}
	static getDerivedStateFromError(): { hasError: true } {
		return { hasError: true };
	}
	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(this.props.handleError);
		this.props.handleError && this.props.handleError(error, errorInfo);
	}
	public render(): JSX.Element | ReactNode {
		if (this.state.hasError) {
			return (
				<div className="d-flex align-items-center justify-content-center w-100" id={this.props.id}>
					<h4>{this.props.errorMessage || ''}</h4>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
