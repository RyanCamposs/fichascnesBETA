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
