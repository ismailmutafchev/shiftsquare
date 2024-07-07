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
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      borderColor = "border-green-800";
      break;
    case "red":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      borderColor = "border-red-800";
      break;
    case "yellow":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      borderColor = "border-yellow-800";
      break;
    case "blue":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      borderColor = "border-blue-800";
      break;
    case "indigo":
      bgColor = "bg-indigo-100";
      textColor = "text-indigo-800";
      borderColor = "border-indigo-800";
      break;
    case "purple":
      bgColor = "bg-purple-100";
      textColor = "text-purple-800";
      borderColor = "border-purple-800";
      break;
    case "pink":
      bgColor = "bg-pink-100";
      textColor = "text-pink-800";
      borderColor = "border-pink-800";
      break;
    case "gray":
      bgColor = "bg-gray-100";
      textColor = "text-gray-800";
      borderColor = "border-gray-800";
      break;
    case "orange":
      bgColor = "bg-orange-100";
      textColor = "text-orange-800";
      borderColor = "border-orange-800";
      break;
    default:
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} border ${borderColor} opacity-80`}
    >
      {content}
    </span>
  );
}
