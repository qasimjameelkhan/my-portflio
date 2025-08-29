import { OrbitControls, PerspectiveCamera, Stage} from "@react-three/drei"
import { MercedesModel } from "./MercedesModel";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const MercedesModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="forest" intensity={0.5}>
                    <MercedesModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1, 0.4, 1.8]} zoom={1.0} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default MercedesModelContainer;