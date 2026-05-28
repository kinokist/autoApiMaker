import { useEffect, useState } from "react";
import { getProjects } from "../api/agentApi";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
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
}

export default ProjectList;