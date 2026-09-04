//src/app/products/page.tsx
import Link from "next/link";

export default function LibraryList() {
    return (
        <div>
            <h1>Genre Buku</h1>
            <h2>Horor</h2>
            <h2>Komedi</h2>
            <h2>Romantis</h2>
        <Link href="/">Beranda</Link>
        </div>
    );
}