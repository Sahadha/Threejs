import './style.css'
import *as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
const canvas = document.querySelector('.webgl')
//creating basic scene
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xffff00})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//defining canvas size
const sizes ={
    width:window.innerWidth,
    height:window.innerHeight
}

//window resizing problem fix

window.addEventListener('resize',()=>{
    //update sizes
    sizes.width=window.innerWidth,
    sizes.height=window.innerHeight

    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width,sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
})

//creating camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.x=0
camera.position.y=0
camera.position.z=5
scene.add(camera)
const controls = new OrbitControls(camera,canvas)
controls.enableDamping=true
//render scene and camera
const renderer = new THREE.WebGLRenderer({
    canvas:canvas,

})
renderer.setSize(sizes.width,sizes.height)

//updating frames for animation
const clock = new THREE.Clock()
const tick = ()=>
{
    const elapsedTime = clock.getElapsedTime()
    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(tick)

}
tick()