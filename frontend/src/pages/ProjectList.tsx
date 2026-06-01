import { useEffect, useState } from "react";
import { getProjects } from "../api/agentApi";

// 프로젝트 데이터 타입 정의
interface Project {
  id: string;
  name: string;
  status: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data as Project[]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📂 생성된 프로젝트 목록</h1>

      {projects.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{p.name}</h3>
          <p>{p.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
