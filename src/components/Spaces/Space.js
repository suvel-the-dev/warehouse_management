import {
    scale,
    palletObject
} from '../../constant';

const palletDimension = palletObject.dim;

const Space = ({
    pos,// position
    color,
    ...props
}) => {
    return (
        <mesh
            {...props}
            scale={scale}
            position={pos}
        >
            <boxGeometry
                args={[
                    palletDimension.width,
                    palletDimension.height,
                    palletDimension.depth
                ]}
            />
            <meshStandardMaterial
                opacity={0.025}
                transparent={true}
                color={color || 'blue'}
                wireframe={true}
            />
        </mesh>
    )
};

export default Space;