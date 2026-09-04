//src/apppage.tsx
import Link from "next/link";
export default function Home() {
  return (
  <div>
    <h1>Selamat datang di portal sekolah</h1>
    <Link href='/library'>Library</Link>
    <br />
    <Link href='/teachers'>Teacher</Link>
  </div>
  );
}
