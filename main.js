import Globe from 'globe.gl';

const container = document.getElementById('globe-container');

// Hubungkan ke elemen globe di HTML
const world = Globe()
  (container)
  .width(360)
  .height(360)
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('rgba(0, 0, 0, 0)')
  .showAtmosphere(true)
  .atmosphereColor('#3b82f6')
  .atmosphereAltitude(0.25);
world.controls().autoRotate = false;
world.pointOfView({ altitude: 2.2 });

