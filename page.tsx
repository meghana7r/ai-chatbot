import Link from "next/link";

export default function ChatPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="max-w-sm w-full p-8 rounded-2xl"
        style={{
          background: "var(--bg-primary)",
          border: "1px solid var(--border-color)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-5"
          style={{ background: "var(--color-brand)" }}
        >
          💬
        </div>
        <h1
          className="text-xl font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Chat window
        </h1>
        <p
          className="text-sm mb-6"
          style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
        >
          This page will be built in{" "}
          <strong style={{ color: "var(--color-brand)", fontWeight: 600 }}>
            Week 1 – Day 3
          </strong>
          . Come back tomorrow!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: "var(--color-brand)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to home
        </Link>
      </div>
    </main>
  );
}
