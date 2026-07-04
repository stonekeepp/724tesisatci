interface JsonLdScriptProps {
  data: Record<string, unknown> | Array<Record<string, unknown> | null> | null;
}

export function JsonLdScript({ data }: JsonLdScriptProps) {
  if (!data) return null;
  const schemas = (Array.isArray(data) ? data : [data]).filter(
    (s): s is Record<string, unknown> => s !== null
  );
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
