import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDeployStatus } from "../api/agentApi";

// 배포 상태 응답 타입 정의
interface DeployStatusResponse {
  status: string;
  url: string;
}

const DeployStatus: React.FC = () => {
  // useParams에 제네릭으로 id 타입 지정
  const { id } = useParams<{ id: string }>();

  // status 상태를 명확히 타입 지정
  const [status, setStatus] = useState<DeployStatusResponse | null>(null);

  useEffect(() => {
    loadStatus();
  }, []);

  const loadStatus = async () => {
    try {
      if (!id) return; // id가 없으면 API 호출하지 않음
      const res = await getDeployStatus(id);
      setStatus(res.data as DeployStatusResponse);
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
};

export default DeployStatus;
