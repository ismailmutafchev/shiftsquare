type AlertProps = {
    message: string,
    type: string
}

export const Alert = ({ message, type }: AlertProps) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
        {message}
        </div>
    );
};