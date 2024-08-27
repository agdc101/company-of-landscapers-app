import { Spin } from 'antd';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full absolute top-0 bottom-0 z-40 bg-white">
            <h3 className="text-2xl mb-4">Loading...</h3>
            <Spin size="large"/>
        </div>
    );
}