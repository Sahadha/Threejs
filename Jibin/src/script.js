import './style.css'
import *as THREE from 'three'

const canvas = document.querySelector('.webgl')
//creating basic scene
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xffff00})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//defining canvas size
const sizes ={
    width:800,
    height:600
}

//creating camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.x=0
camera.position.y=0
camera.position.z=5
scene.add(camera)

//render scene and camera
const renderer = new THREE.WebGLRenderer({
    canvas:canvas,

})
renderer.render(scene,camera)