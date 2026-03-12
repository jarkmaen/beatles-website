import LoadingScreen from "./LoadingScreen";
import { Suspense, type ComponentType } from "react";

type Props = {
    component: ComponentType<any>;
};

const LazyRoute = ({ component: Component }: Props) => (
    <Suspense fallback={<LoadingScreen />}>
        <Component />
    </Suspense>
);

export default LazyRoute;
