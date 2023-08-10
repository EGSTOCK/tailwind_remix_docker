export default function test() {
    return (
        <div className={'grid grid-cols-12 mt-10'}>
            <div className={'col-span-4'} />
            <div className={'col-span-4 bg-blue-100 w-[100px] text-center text-red-500 font-bold'}>
                <h1>Hello, test</h1>
            </div>
            <div className={'col-span-4'} />
        </div>
    )
}