import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, light, torus;

        // Initialize Three.js scene
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio); // Adjust pixel ratio

        // Create torus and add it to the scene with metallic material
        const torusGeometry = new THREE.TorusGeometry(1.3, 0.1, 64, 100); // Increase segments for smoother geometry
        const torusMaterial = new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 0.5, // Adjust metalness
            roughness: 0.2, // Adjust roughness
        });

        torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.z = -2
        scene.add(torus);

        // Set camera position
        camera.position.z = 5;

        // Create a light source
        light = new THREE.PointLight(0xffffff, 10);
        // light = new THREE.PointLight(0xffffff, 1, 60);
        // light.position.set(0, 0, 0);
        scene.add(light);

        // Mouse movement for light color and position
        const onMouseMove = (event) => {

            event.preventDefault();
            const clientX = event.clientX || (event.touches && event.touches[0].clientX);
            const clientY = event.clientY || (event.touches && event.touches[0].clientY);

            if (clientX !== undefined && clientY !== undefined) {
                const mouseX = (clientX / window.innerWidth) * 2 - 1;
                const mouseY = (clientY / window.innerHeight) * 2 + 1 ;

                // Update light direction based on mouse or touch position
                // const newDirection = new THREE.Vector3(mouseX, 5 , );
                const color = new THREE.Color(mouseX +1, mouseX+1, mouseX +1);
                light.color = color;
                light.position.x = mouseX;
            }


        };

        window.addEventListener('mousemove', onMouseMove);

        // Animation logic
        const animate = () => {
            requestAnimationFrame(animate);

            // Perform animations or updates here
            // torus.rotation.y += 0.002;

            renderer.render(scene, camera);
        };

        animate();
        window.addEventListener('resize', () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            // Update camera aspect ratio and renderer size
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        });

        // Cleanup on unmount
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            // Clean up Three.js objects, event listeners, etc. if needed
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ThreeScene;
