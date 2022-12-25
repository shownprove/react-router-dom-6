import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>userId : {userId}</h1>
      <h2>userName : {users[Number(userId) - 1].name}</h2>
    </div>
  );
}

export default User;
