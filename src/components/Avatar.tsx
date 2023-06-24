type AvatarProps = {
    url?: string;
    size?: number;
    className?: string;
    onClick?: () => void;
    firstName?: string;
    lastName?: string;
};

export default function Avatar(props: AvatarProps) {
    const { url, size, className, onClick, firstName, lastName } = props;

    return (
        <div
            className={`w-${size} h-${size} rounded-full bg-gray-200 ${className}`}
            onClick={onClick}
        >
            {url ? (
                <img
                    src={url}
                    alt="Avatar"
                    className={`w-${size} h-${size} rounded-full`}
                />
            ) : (
                <div className={`w-${size} h-${size} flex rounded-full bg-gray-200 items-center justify-center`}>
                    <span className="text-xl text-gray-500 font-semibold">
                        {firstName?.charAt(0).toUpperCase() }
                        {lastName?.charAt(0).toUpperCase()}
                    </span>
                </div>
            )}
        </div>
    );
}

