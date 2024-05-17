import { Suspense, lazy } from "react"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(4000).then(()=> import('./LazyButton')));
const LazyBasic = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyButton></LazyButton>
            <LazyButton2></LazyButton2>
        </Suspense>
    )
}

export default LazyBasic;