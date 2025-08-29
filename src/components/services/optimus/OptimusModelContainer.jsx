import { OrbitControls, PerspectiveCamera, Stage} from "@react-three/drei"
import { OptimusModel } from "./OptimusModel";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const OptimusModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="studio" intensity={0.8}>
                    <OptimusModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1, 0.4, 1.8]} zoom={0.8} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default OptimusModelContainer;