/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-24 15:16:58
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 17:57:41
 * @FilePath: /react/src/components/CelestialBody/CelestialConfig.js
 * @Description:  粒子
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
const initialBlobs = [
  {
    blobScale: 0.3,
    rotationSpeed: 0.0036,
    translateNoiseAmount: 200,
    translateNoiseScale: 0.0014,
    translateNoiseSpeed: 0.0067,
    particlesCount: 20000,
    scale: 5,
    scaleNoiseAmount: 0.2025,
    scaleNoiseScale: 0.0075,
    scaleNoiseSpeed: 0.0014,
    color1: "#ffff0f",
    color2: "#c700ff",
    colorNoiseAmount: 1,
    colorNoiseScale: 0.0005,
    colorNoiseSpeed: 0.0036,
    alpha: 0.3,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0015,
    alphaNoiseSpeed: 0.0212,
    alphaNoisePow: 1.3043,
  },
  {
    blobScale: 0.71,
    rotationSpeed: 0.0065,
    translateNoiseAmount: 115,
    translateNoiseScale: 0.0027,
    translateNoiseSpeed: 0.0054,
    particlesCount: 20000,
    scale: 5,
    scaleNoiseAmount: 0.9565,
    scaleNoiseScale: 0.001,
    scaleNoiseSpeed: 0.005,
    color1: "#5900ff",
    color2: "#00dfff",
    colorNoiseAmount: 0.7571,
    colorNoiseScale: 0.0068,
    colorNoiseSpeed: 0.0096,
    alpha: 1,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.001,
    alphaNoiseSpeed: 0.0001,
    alphaNoisePow: 1.9565,
  },
  {
    blobScale: 1,
    rotationSpeed: 0.00239,
    translateNoiseAmount: 141,
    translateNoiseScale: 0.0021,
    translateNoiseSpeed: 0.0026,
    particlesCount: 20000,
    scale: 6,
    scaleNoiseAmount: 1,
    scaleNoiseScale: 0.0042,
    scaleNoiseSpeed: 0.0094,
    color1: "#03ffb7",
    color2: "#c700ff",
    colorNoiseAmount: 1,
    colorNoiseScale: 0.0009,
    colorNoiseSpeed: 0.0109,
    alpha: 1,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0009,
    alphaNoiseSpeed: 0.0163,
    alphaNoisePow: 2.0652,
  },
  {
    blobScale: 1.41,
    rotationSpeed: 0.00827,
    translateNoiseAmount: 67,
    translateNoiseScale: 0.0046,
    translateNoiseSpeed: 0.0185,
    particlesCount: 20000,
    scale: 31,
    scaleNoiseAmount: 1,
    scaleNoiseScale: 0.0026,
    scaleNoiseSpeed: 0.0023,
    color1: "#ff00d6",
    color2: "#00acff",
    colorNoiseAmount: 1,
    colorNoiseScale: 0.0008,
    colorNoiseSpeed: 0.0057,
    alpha: 0.1,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0018,
    alphaNoiseSpeed: 0.0136,
    alphaNoisePow: 9.6739,
  },
  {
    blobScale: 0.38,
    rotationSpeed: 0.00173,
    translateNoiseAmount: 150,
    translateNoiseScale: 0.0032,
    translateNoiseSpeed: 0.0141,
    particlesCount: 10,
    scale: 100,
    scaleNoiseAmount: 1,
    scaleNoiseScale: 0.0029,
    scaleNoiseSpeed: 0.0036,
    color1: "#ff00d6",
    color2: "#00acff",
    colorNoiseAmount: 1,
    colorNoiseScale: 0.002,
    colorNoiseSpeed: 0.0064,
    alpha: 1,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0028,
    alphaNoiseSpeed: 0.0174,
    alphaNoisePow: 1.3553,
  },
  {
    blobScale: 1.14,
    rotationSpeed: 0.00668,
    translateNoiseAmount: 189,
    translateNoiseScale: 0.0029,
    translateNoiseSpeed: 0.0044,
    particlesCount: 10,
    scale: 100,
    scaleNoiseAmount: 1,
    scaleNoiseScale: 0.0034,
    scaleNoiseSpeed: 0.0245,
    color1: "#4100ff",
    color2: "#f100ff",
    colorNoiseAmount: 1,
    colorNoiseScale: 0.002,
    colorNoiseSpeed: 0.0064,
    alpha: 0.5,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0055,
    alphaNoiseSpeed: 0.025,
    alphaNoisePow: 3.1522,
  },
  {
    blobScale: 1.85,
    rotationSpeed: 0.00108,
    translateNoiseAmount: 95,
    translateNoiseScale: 0.0014,
    translateNoiseSpeed: 0.012,
    particlesCount: 4000,
    scale: 100,
    scaleNoiseAmount: 1,
    scaleNoiseScale: 0.0017,
    scaleNoiseSpeed: 0.05,
    color1: "#5900ff",
    color2: "#00dfff",
    colorNoiseAmount: 1,
    colorNoiseScale: 0.0063,
    colorNoiseSpeed: 0.0097,
    alpha: 0.05,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0007,
    alphaNoiseSpeed: 0.0152,
    alphaNoisePow: 7.8261,
  },
  {
    blobScale: 5,
    rotationSpeed: 0.00065,
    translateNoiseAmount: 45,
    translateNoiseScale: 0.0097,
    translateNoiseSpeed: 0.0001,
    particlesCount: 55000,
    scale: 18,
    scaleNoiseAmount: 1,
    scaleNoiseScale: 0.0008,
    scaleNoiseSpeed: 0.0086,
    color1: "#ffffff",
    color2: "#ffffff",
    colorNoiseAmount: 0,
    colorNoiseScale: 0,
    colorNoiseSpeed: 0,
    alpha: 0.3,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0017,
    alphaNoiseSpeed: 0.0234,
    alphaNoisePow: 1.9565,
  },
  {
    blobScale: 5,
    rotationSpeed: 0.00065,
    translateNoiseAmount: 45,
    translateNoiseScale: 0.0097,
    translateNoiseSpeed: 0.0001,
    particlesCount: 55000,
    scale: 18,
    scaleNoiseAmount: 1,
    scaleNoiseScale: 0.0008,
    scaleNoiseSpeed: 0.0086,
    color1: "#ffffff",
    color2: "#ffffff",
    colorNoiseAmount: 0,
    colorNoiseScale: 0,
    colorNoiseSpeed: 0,
    alpha: 0.3,
    alphaNoiseAmount: 1,
    alphaNoiseScale: 0.0017,
    alphaNoiseSpeed: 0.0234,
    alphaNoisePow: 1.9565,
  },
];

const defaultBlobOptions = {
  blobSize: 500,
  blobScale: 1,
  rotationSpeed: 0.002,
  translateNoiseAmount: 70,
  translateNoiseScale: 0.0025,
  translateNoiseSpeed: 0.0043,
  particlesCount: 10000,
  scale: 15,
  scaleNoiseAmount: 1,
  scaleNoiseScale: 0.0025,
  scaleNoiseSpeed: 0.01,
  color1: "#dc00ff",
  color2: "#00fff4",
  colorNoiseAmount: 1,
  colorNoiseScale: 0.0004,
  colorNoiseSpeed: 0.0065,
  alpha: 0.5,
  alphaNoiseAmount: 1,
  alphaNoiseScale: 0.0007,
  alphaNoiseSpeed: 0.0114,
  alphaNoisePow: 1.5,
};

const maxParticlesCount = 700000;

export { initialBlobs, defaultBlobOptions, maxParticlesCount };
