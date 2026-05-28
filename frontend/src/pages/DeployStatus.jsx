import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDeployStatus } from "../api/agentApi";

function DeployStatus() {
  const { id } = useParams();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    loadStatus();
  }, []);

  const loadStatus = async () => {
    try {
      const res = await getDeployStatus(id);
      setStatus(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 배포 상태</h1>

      {status ? (
        <div>
          <p>Status: {status.status}</p>
          <p>URL: {status.url}</p>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}

export default DeployStatus;