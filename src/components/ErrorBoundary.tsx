import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const ErrorBoundary = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
}

export default ErrorBoundary