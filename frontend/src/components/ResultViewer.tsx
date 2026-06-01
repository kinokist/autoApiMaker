import React from "react";

// props 타입 정의
interface ResultViewerProps {
  result: unknown; // 혹은 실제 API 응답 구조에 맞게 타입 지정
}

const ResultViewer: React.FC<ResultViewerProps> = ({ result }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>📦 생성 결과</h3>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: "10px",
          overflow: "auto",
        }}
      >
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
};

export default ResultViewer;
