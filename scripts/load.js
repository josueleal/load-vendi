document.addEventListener('DOMContentLoaded', () => {
  const loadingOverlay = document.getElementById('loadingOverlay');
  const effectsOverlay = document.getElementById('effectsOverlay');
  const breathOverlay = document.getElementById('breathOverlay');
  
  const showOverlay = document.getElementById('showOverlay');
  const showEffects = document.getElementById('showEffects');
  const showBreathEffect = document.getElementById('showBreathEffect');

  showOverlay.addEventListener('click', () => {
    loadingOverlay.style.display = 'flex';
    effectsOverlay.style.display = 'none';
    breathOverlay.style.display = 'none';
  });

  showEffects.addEventListener('click', () => {
    effectsOverlay.style.display = 'flex';
    loadingOverlay.style.display = 'none';
    breathOverlay.style.display = 'none';
  });

  showBreathEffect.addEventListener('click', () => {
    breathOverlay.style.display = 'flex';
    loadingOverlay.style.display = 'none';
    effectsOverlay.style.display = 'none';
  });
});
