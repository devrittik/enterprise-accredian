import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="grid min-h-[60vh] place-items-center px-4">
            <div className="text-center">

                <Image
                    src="/other/404.svg"
                    alt="404 Illustration"
                    width={420}
                    height={320}
                    className="mx-auto h-auto w-full max-w-md"
                />

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Back Home
                </Link>
            </div>
        </div>
    );
}