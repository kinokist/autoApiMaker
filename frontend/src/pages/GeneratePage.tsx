import { useState } from "react";
import QueryInput from "../components/QueryInput";
import SchemaInput from "../components/SchemaInput";
import ResultViewer from "../components/ResultViewer";
import { generateBackend } from "../api/agentApi";

// API 요청 파라미터 타입
interface GenerateRequest {
  query: string;
  schema: string;
}

// API 응답 타입 (백엔드에서 반환하는 구조에 맞게 수정 가능)
interface GenerateResponse {
  success: boolean;
  message?: string;
  data?: any;
}

const GeneratePage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [schema, setSchema] = useState<string>("");
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await generateBackend({ query, schema } as GenerateRequest);
      setResult(res.data as GenerateResponse);
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
};

export default GeneratePage;
