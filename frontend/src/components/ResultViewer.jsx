function ResultViewer({ result }) {
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
}

export default ResultViewer;