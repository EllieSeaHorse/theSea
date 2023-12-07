import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, light;
        const cubes = [];

        // Initialize Three.js scene
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true }); // Set alpha to true for transparency
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create cubes and add them to the scene with metallic material
        const cubeGeometry = new THREE.TorusGeometry(0.8, 0.2, 100);
        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0xff0000,
            metalness: 0.9, // Adjust metalness
            roughness: 0.7, // Adjust roughness
        });

        for (let i = 0; i < 20; i++) {
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = Math.random() * 10 - 5;
            cube.position.y = Math.random() * 10 - 5;
            cube.position.z = Math.random() * 10 - 5;
            cubes.push(cube);
            scene.add(cube);
        }

        // Set camera position
        camera.position.z = 5;

        // Create a light source
        light = new THREE.PointLight(0xffffff, 4);
        scene.add(light);

        // Mouse movement for light
        const onMouseMove = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            light.position.x = mouseX * 10;
            light.position.y = mouseY * 10;
        };

        window.addEventListener('mousemove', onMouseMove);

        // Animation logic
        const animate = () => {
            requestAnimationFrame(animate);

            // Perform animations or updates here
            cubes.forEach((cube) => {
                cube.rotation.x += 0.02;
                cube.rotation.y += 0.02;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            // Clean up Three.js objects, event listeners, etc. if needed
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ThreeScene;
