import Link from "next/link";
import { getAllBlogPosts } from "@/lib/services/blogService";

export default async function AdminBlogListPage() {
  const posts = await getAllBlogPosts();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Yazıları</h1>
        <Link
          href="/admin/blog/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Yeni Yazı
        </Link>
      </div>
      <div className="bg-white rounded-lg border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-3">Başlık</th>
              <th className="text-left p-3">Durum</th>
              <th className="text-left p-3">Tarih</th>
              <th className="text-left p-3">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{post.title}</td>
                <td className="p-3">
                  <span
                    className={
                      post.status === "published"
                        ? "bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs"
                        : "bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs"
                    }
                  >
                    {post.status === "published" ? "Yayında" : "Taslak"}
                  </span>
                </td>
                <td className="p-3">
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                </td>
                <td className="p-3">
                  <Link
                    href={`/admin/blog/edit/${post.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Düzenle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
