import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { updateReadStatus } from "../../queries/leave/mutations";
import { useSession } from "../../hooks/session";
import { getLeaveOne, getPendingLeave } from "../../queries/leave/queries";
import { LoadingAnimation } from "../../assets/AnimationComponents/AnimationComponents";
import { useEffect } from "react";

export default function Request() {
  const { id } = useParams();
  const { profile } = useSession();

  const { data, loading } = useQuery(getLeaveOne, {
    variables: {
      id: id,
    },
  });



  const readBy = data && data.leave_by_pk && !data.leave_by_pk.readBy.includes(profile.id) && data.leave_by_pk.readBy || [];

  const [updateLeave] = useMutation(updateReadStatus, {
    variables: {
      id: id,
      readBy: [...readBy,profile.id],
    },
    refetchQueries: [{ query: getPendingLeave}],
  });

  useEffect(() => {
    readBy !== undefined && readBy.length && updateLeave();
  }
  // eslint-disable-next-line
  ,[data]);

  if (loading) {
    return <LoadingAnimation/>;
  }
  return (
    <div>
      <h1>Request</h1>
      <button
        onClick={() => {
          updateLeave();
        }}
      >
        <span>Read</span>
      </button>
    </div>
  );
}
