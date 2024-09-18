export default function Badge({
  content,
  color,
}: {
  content: string;
  color: string;
}) {
  let bgColor = "";
  let textColor = "";
  let borderColor = "";

  switch (color) {
    case "green":
      bgColor = "bg-green-50";
      textColor = "text-green-700";
      borderColor = "border-green-600/20";
      break;
    case "red":
      bgColor = "bg-red-50";
      textColor = "text-red-700";
      borderColor = "border-red-600/20";
      break;
    case "yellow":
      bgColor = "bg-yellow-50";
      textColor = "text-yellow-700";
      borderColor = "border-yellow-600/20";
      break;
    case "blue":
      bgColor = "bg-blue-50";
      textColor = "text-blue-700";
      borderColor = "border-blue-600/20";
      break;
    case "polar":
      bgColor = "bg-polar-50";
      textColor = "text-polar-700";
      borderColor = "border-polar-600/20";
      break;
    case "purple":
      bgColor = "bg-purple-50";
      textColor = "text-purple-700";
      borderColor = "border-purple-600/20";
      break;
    case "pink":
      bgColor = "bg-pink-50";
      textColor = "text-pink-800";
      borderColor = "border-pink-600/20";
      break;
    case "gray":
      bgColor = "bg-gray-50";
      textColor = "text-gray-800";
      borderColor = "border-gray-600/20";
      break;
    case "orange":
      bgColor = "bg-orange-50";
      textColor = "text-orange-800";
      borderColor = "border-orange-600/20";
      break;
    default:
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} border ${borderColor} opacity-80`}
    >
      {content}
    </span>
  );
}
