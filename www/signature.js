const canvas = document.getElementById('sigCanvas');
const sigPad = new SignaturePad(canvas, { backgroundColor: 'rgba(255,255,255,0)' });

document.getElementById('clearSig').addEventListener('click', () => sigPad.clear());

document.getElementById('saveSig').addEventListener('click', () => {
  if (sigPad.isEmpty()) return showToast('Assine primeiro', 'error');
  const dataUrl = sigPad.toDataURL('image/png'); // base64 PNG
  // Armazene onde quiser: campo hidden, localStorage ou inserir direto no jsPDF
  localStorage.setItem('assinatura', dataUrl);
  showToast('Assinatura salva', 'success');
});

function resizeCanvas() {
  const ratio = Math.max(window.devicePixelRatio || 1, 1);

  // Salva desenho atual
  let data = signaturePad && !signaturePad.isEmpty() ? signaturePad.toData() : null;

  // Ajusta largura/altura real do canvas
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetWidth * 0.4 * ratio; // mantém proporção 500/200 = 0.4
  canvas.getContext("2d").scale(ratio, ratio);

  // Restaura desenho
  if (data) signaturePad.fromData(data);
}

 // Evento de toggle da assinatura
 function toggleAssinature() {
   const sigSection = document.getElementById('sigSection');
   sigSection.classList.toggle('hidden');
 }