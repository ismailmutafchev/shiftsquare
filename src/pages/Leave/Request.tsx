import { useParams } from "react-router-dom";

export default function Request() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Request</h1>
    </div>
  );
}
