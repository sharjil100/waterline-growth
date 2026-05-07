import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Recording — Waterline Growth",
  description: "Listen to the AI receptionist call.",
};

function getSafeAudioUrl(raw: string | string[] | undefined): string | null {
  if (!raw) return null;
  const value = Array.isArray(raw) ? raw[0] : raw;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

export default async function PlayReceptionistRecordingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const audioUrl = getSafeAudioUrl(params.url);

  return (
    <main
      style={{
        margin: 0,
        backgroundColor: "#f4f4f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "90%",
          maxWidth: "350px",
        }}
      >
        <h2 style={{ color: "#333", marginTop: 0 }}>Lead Recording</h2>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
          Listen to the AI receptionist call.
        </p>
        {audioUrl ? (
          <audio controls autoPlay style={{ width: "100%" }} src={audioUrl}>
            Your browser does not support audio playback.
          </audio>
        ) : (
          <p style={{ color: "#b00020", fontSize: "14px" }}>
            No recording URL provided.
          </p>
        )}
      </div>
    </main>
  );
}
