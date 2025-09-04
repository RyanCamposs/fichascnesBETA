// Canvases e SignaturePads
const canvasResp = document.getElementById('sigCanvasResponsavel');
const canvasProf = document.getElementById('sigCanvasProfissional');

const sigPadResp = new SignaturePad(canvasResp, { backgroundColor: 'rgba(255,255,255,0)' });
const sigPadProf = new SignaturePad(canvasProf, { backgroundColor: 'rgba(255,255,255,0)' });

// Botões Responsável
document.getElementById('clearSigResponsavel').addEventListener('click', () => sigPadResp.clear());
document.getElementById('saveSigResponsavel').addEventListener('click', () => {
  const dataUrl = sigPadResp.toDataURL('image/png');
  localStorage.setItem('assinaturaResponsavel', dataUrl);
  alert('Assinatura do Responsável salva!');
});

// Botões Profissional
document.getElementById('clearSigProfissional').addEventListener('click', () => sigPadProf.clear());
document.getElementById('saveSigProfissional').addEventListener('click', () => {
  const dataUrl = sigPadProf.toDataURL('image/png');
  localStorage.setItem('assinaturaProfissional', dataUrl);
  alert('Assinatura do Profissional salva!');
});

if (sigPadResp.isEmpty() || sigPadProf.isEmpty()) {
    localStorage.setItem('assinaturaResponsavel', dataUrl);
    alert('Assinatura do Responsável salva!');
  }

 function assinarResponsavel () {
   const sigSection = document.getElementById('sigSection2');
   const sigSectionOther = document.getElementById('sigSection3')
    if (sigSectionOther.classList.contains("hidden")) {
        sigSection.classList.toggle('hidden');
   } else {
        sigSectionOther.classList.toggle('hidden');
        sigSection.classList.toggle('hidden');
   }
 }

 function assinarProfissional () {
   const sigSection = document.getElementById('sigSection3');
   const sigSectionOther = document.getElementById('sigSection2')
   ;

   if (sigSectionOther.classList.contains("hidden")) {
        sigSection.classList.toggle('hidden');
   } else {
        sigSectionOther.classList.toggle('hidden');
        sigSection.classList.toggle('hidden');
   }

  
 }