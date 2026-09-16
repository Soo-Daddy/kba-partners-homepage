import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
      <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
        404
      </p>
      <h1 className="mt-6 text-2xl font-semibold leading-snug text-[color:var(--color-navy-900)] sm:text-3xl">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-[1.9] text-[color:var(--color-gray-600)]">
        요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 border border-[color:var(--color-navy-900)] px-8 py-3.5 text-xs font-medium tracking-[0.14em] text-[color:var(--color-navy-900)] transition-colors hover:bg-[color:var(--color-navy-900)] hover:text-white"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
