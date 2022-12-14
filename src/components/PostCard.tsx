import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

interface PostCardProps {
  data: {
    title: string;
    created_at: string;
    body: string;
    number: number;
  };
}

export function PostCard({ data }: PostCardProps) {
  const { title, created_at, body, number } = data;

  const formatedDate = formatDistance(new Date(created_at), new Date(), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <li>
      <Link href={`/post/${number}`}>
        <a className="max-h-[260px] bg-base-post p-8 flex flex-col gap-5 rounded-[10px] duration-300 border-2 border-base-post cursor-pointer hover:border-base-label">
          <div className="flex items-start justify-between gap-8">
            <h4 className="text-base-title text-xl font-bold">{title}</h4>
            <span className="text-base-span text-sm">{formatedDate}</span>
          </div>
          <div className="text-ellipses-3 lg:text-ellipses-5">
            <p className="text-base-text">{body}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
