export default function Loading() {
    return (
        <div className="grid min-h-[60vh] place-items-center px-4">
            <div className="text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
                <p className="mt-4 text-sm text-slate-500">
                    Loading experience...
                </p>
            </div>
        </div>
    );
}