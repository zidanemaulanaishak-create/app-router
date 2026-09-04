//src/apppage.tsx
import Link from "next/link";
export default function Home() {
  return (
  <div>
    <h1>Selamat datang di portal sekolah</h1>
    <Link href='/teachers/budi'>Guru Budi</Link>
    <br />
    <Link href='/teachers/yanto'>Guru Yanto</Link>
  </div>
  );
}
