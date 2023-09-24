type AvatarProps = {
  imageUrl?: string;
  size?: 10 | 16;
  className?: string;
  onClick?: () => void;
  firstName?: string;
  lastName?: string;
  border?: boolean;
};

export default function Avatar(props: AvatarProps) {
  const { imageUrl, size, className, onClick, firstName, lastName, border } = props;

  return (
    <div className="flex items-center relative">
      <div
        className={`w-${size} h-${size} rounded-full flex justify-center items-center ${className} ${border ? 'border-2 border-opacity-75 border-white' : ''} `}
        onClick={onClick}
        style={{
          cursor: "pointer",
          backgroundColor: className ? className : "#e2e8f0",
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Avatar"
            className={`w-${size} h-${size} rounded-full`}
          />
        ) : (
          <div
            className={`w-${size} h-${size} flex rounded-full ${className} items-center justify-center`}
          >
            <span className="text-xl text-gray-500 font-semibold">
              {firstName?.charAt(0).toUpperCase()}
              {lastName?.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
