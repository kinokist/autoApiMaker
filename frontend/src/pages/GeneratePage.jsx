import { useState } from "react";
import QueryInput from "../components/QueryInput";
import SchemaInput from "../components/SchemaInput";
import ResultViewer from "../components/ResultViewer";
import { generateBackend } from "../api/agentApi";

function GeneratePage() {
  const [query, setQuery] = useState("");
  const [schema, setSchema] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await generateBackend({ query, schema });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("생성 실패");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🤖 AI Backend Generator</h1>

      <SchemaInput value={schema} onChange={setSchema} />
      <QueryInput value={query} onChange={setQuery} />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "생성 중..." : "🚀 생성하기"}
      </button>

      {result && <ResultViewer result={result} />}
    </div>
  );
}

export default GeneratePage;