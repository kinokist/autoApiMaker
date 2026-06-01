import React from "react";

// props 타입 정의
interface SchemaInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SchemaInput: React.FC<SchemaInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <h3>🗄 DB 스키마</h3>
      <textarea
        rows={5}
        style={{ width: "100%" }}
        placeholder="예: users(id, name, email)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SchemaInput;
