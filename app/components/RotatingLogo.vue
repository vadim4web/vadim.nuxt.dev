<script setup>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshStandardMaterial,
  CubeTextureLoader,
  Clock,
} from 'three'

let model = null
let themeObserver = null
let animationFrameId = null
let currentTheme = getCurrentTheme()
let GLTFLoader, DRACOLoader, scene, camera, renderer

const ASSETS_DIR = '/model/'
const MODEL_NAME = 'logo.glb'
const canvasContainer = ref(null)
const environmentMaps = {}
const clock = new Clock()

function getCurrentTheme() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--is-dark')
    .trim() === '1'
    ? 'dark'
    : 'light'
}

function preloadEnvironmentMaps() {
  const loader = new CubeTextureLoader()
  environmentMaps.light = loader.load(
    `${ASSETS_DIR}texture-silver.jpg `.repeat(6).split(' '),
  )
  environmentMaps.dark = loader.load(
    `${ASSETS_DIR}texture-gold.jpg `.repeat(6).split(' '),
  )
}

function initializeScene() {
  scene = new Scene()
  camera = new PerspectiveCamera(76.5, 1, 1.5, 1000)
  camera.position.set(0, 0, 3.625)
  renderer = new WebGLRenderer({ antialias: true, alpha: true })
  // renderer.setPixelRatio(window.devicePixelRatio)
  renderer.autoClear = false
  renderer.shadowMap.enabled = false
  renderer.physicallyCorrectLights = false
  canvasContainer.value.appendChild(renderer.domElement)
  setRendererSize()
}

async function loadModel() {
  if (!GLTFLoader || !DRACOLoader) {
    const { GLTFLoader: Loader } = await import(
      'three/examples/jsm/loaders/GLTFLoader.js'
    )
    const { DRACOLoader: DracoLoader } = await import(
      'three/addons/loaders/DRACOLoader.js'
    )
    GLTFLoader = Loader
    DRACOLoader = DracoLoader
  }
  const loader = new GLTFLoader()
  const draco = new DRACOLoader()
  draco.setDecoderPath(
    'https://www.gstatic.com/draco/versioned/decoders/1.5.7/',
  )
  loader.setDRACOLoader(draco)
  loader.load(
    `${ASSETS_DIR}${MODEL_NAME}`,
    (gltf) => {
      model = gltf.scene
      updateModelMaterial(currentTheme)
      scene.add(model)
    },
    undefined,
    error => console.error('Error loading model:', error),
  )
}

function setRendererSize() {
  const size = Math.min(window.innerWidth, window.innerHeight) * 1
  renderer.setSize(size, size)
  camera.aspect = 1
  camera.updateProjectionMatrix()
}

function updateModelMaterial(theme) {
  if (!model || !environmentMaps[theme]) return
  model.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({
        metalness: 1,
        roughness: 0.1,
        envMap: environmentMaps[theme],
        envMapIntensity: 1,
      })
    }
  })
}

function observeThemeChanges() {
  const observer = new MutationObserver(() => {
    const newTheme = getCurrentTheme()
    if (newTheme !== currentTheme) {
      currentTheme = newTheme
      updateModelMaterial(currentTheme)
    }
  })
  observer.observe(document.documentElement, { attributes: true })
  return observer
}

function animate() {
  const delta = clock.getDelta()
  if (model) {
    model.rotation.x = Math.PI / 2
    model.rotation.z += delta * 0.5
  }
  renderer.clear()
  renderer.render(scene, camera)
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  preloadEnvironmentMaps()
  initializeScene()
  loadModel()
  window.addEventListener('resize', setRendererSize)
  themeObserver = observeThemeChanges()
  clock.start()
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', setRendererSize)
  themeObserver?.disconnect()
  cancelAnimationFrame(animationFrameId)
  renderer.dispose()
  scene.clear()
})
</script>

<template>
  <div
    ref="canvasContainer"
    class="absolute w-full flex items-center justify-center"
    style="filter: drop-shadow(0 0 1rem var(--accent0));
      -webkit-filter: drop-shadow(0 0 1rem var(--accent0));"
  />
</template>
