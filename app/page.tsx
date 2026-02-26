import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-700 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Website Desa Telagawaru
      </h1>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold"
        >
          Login
        </Link>

        <Link
          href="/permohonan"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Ajukan Surat Online
        </Link>
      </div>
    </main>
  )
}
