import Link from "next/link";
export default function Home() {
  return (
    <div>
      Simple project to get current DateTime. Access in{" "}
      <Link href="/api/currentDateTime">
        {`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/currentDateTime`}
      </Link>
    </div>
  );
}
