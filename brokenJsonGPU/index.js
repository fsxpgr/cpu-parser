//юзелес скрипт

const entry = require('./entry.json');
const fs = require('fs');
dist = [];
var ss = 882;
while (ss--) {
    dist.push({});
}
entry.forEach((item, i) => {
    dist[i]['title'] = item['title'];
    dist[i]['url'] = item['url'];
    dist[i]['GPU Name'] = item['GPU Name'];
    dist[i]['GPU Variant'] = item['GPU Variant'];
    dist[i]['Architecture'] = item['Architecture'];
    dist[i]['Process Size'] = item['Process Size'];
    dist[i]['Transistors'] = item['Transistors'];
    dist[i]['Die Size'] = item['Die Size'];
    dist[i]['Released'] = item['Released'];
    dist[i]['Production Status'] = item['Production Status'];
    dist[i]['Bus Interface'] = item['Bus Interface'];
    dist[i]['GPU Clock'] = item['GPU Clock'];
    dist[i]['Boost Clock'] = item['Boost Clock'];
    dist[i]['Memory Clock'] = item['Memory Clock'];
    dist[i]['Memory Size'] = item['Memory Size'];
    dist[i]['Memory Type'] = item['Memory Type'];
    dist[i]['Memory Bus'] = item['Memory Bus'];
    dist[i]['Bandwidth'] = item['Bandwidth'];
    dist[i]['Shading Units'] = item['Shading Units'];
    dist[i]['TMUs'] = item['TMUs'];
    dist[i]['ROPs'] = item['ROPs'];
    dist[i]['Compute Units'] = item['Compute Units'];
    dist[i]['Pixel Rate'] = item['Pixel Rate'];
    dist[i]['Texture Rate'] = item['Texture Rate'];
    dist[i]['Floating-point performance'] = item['Floating-point performance'];
    dist[i]['Slot Width'] = item['Slot Width'];
    dist[i]['Length'] = item['Length'];
    dist[i]['TDP'] = item['TDP'];
    dist[i]['Outputs'] = item['Outputs'];
    dist[i]['Power Connectors'] = item['Power Connectors'];
    dist[i]['DirectX'] = item['DirectX'];
    dist[i]['OpenGL'] = item['OpenGL'];
    dist[i]['OpenCL'] = item['OpenCL'];
    dist[i]['Shader Model'] = item['Shader Model'];
    dist[i]['Launch Price'] = item['Launch Price'];
    dist[i]['Board Number'] = item['Board Number'];
    dist[i]['China Exclusive\\nMemory Variant'] = item['China Exclusive\\nMemory Variant'];
    dist[i]['Exact Transistor Count'] = item['Exact Transistor Count'];
    dist[i]['1 GB Version'] = item['1 GB Version'];
    dist[i]['OEM\\nFirst Validated'] = item['OEM\\nFirst Validated'];
    dist[i]['OEM Version\\nExact Transistor Count'] = item['OEM Version\\nExact Transistor Count'];
    dist[i]['Very Rare GPU Rebranded HD 5630\\nMemory Variant'] = item['Very Rare GPU Rebranded HD 5630\\nMemory Variant'];
    dist[i]['Rebranded HD 5450\\nVariant Memory'] = item['Rebranded HD 5450\\nVariant Memory'];
    dist[i]['Memory Variant'] = item['Memory Variant'];
    dist[i]['Variant Memory'] = item['Variant Memory'];
    dist[i]['Pixel Shaders'] = item['Pixel Shaders'];
    dist[i]['Vertex Shaders'] = item['Vertex Shaders'];
    dist[i]['Vertex Rate'] = item['Vertex Rate'];
    dist[i]['Pixel Shader'] = item['Pixel Shader'];
    dist[i]['Vertex Shader'] = item['Vertex Shader'];
    dist[i]['SM Count'] = item['SM Count'];
    dist[i]['CUDA'] = item['CUDA'];
    dist[i]['Tensor Cores'] = item['Tensor Cores'];
    dist[i]['Base Clock'] = item['Base Clock'];
    dist[i]['Shader Clock'] = item['Shader Clock'];
    dist[i]['SMM Count'] = item['SMM Count'];
    dist[i]['SMX Count'] = item['SMX Count'];
    dist[i]['OEM only\\nDPUs'] = item['OEM only\\nDPUs'];
    dist[i]['DPUs'] = item['DPUs'];
    dist[i]['OEM Only, 192-Bit\\nMemory Variant'] = item['OEM Only, 192-Bit\\nMemory Variant'];
    dist[i]['OEM\\nMemory Variant'] = item['OEM\\nMemory Variant'];
    dist[i]['OEM\\nDPUs'] = item['OEM\\nDPUs'];
    dist[i]['Dual GK104. PLX PEX8747 switch. SFUs'] = item['Dual GK104. PLX PEX8747 switch. SFUs'];
    dist[i]['Rebranded GTX 560 SE with higher core clock. OEM only. Variant Memory'] =
        item['Rebranded GTX 560 SE with higher core clock. OEM only. Variant Memory'];
    dist[i]['OEM Variant Memory'] = item['OEM Variant Memory'];
    dist[i]['SFUs'] = item['SFUs'];
    dist[i]['OEM\\nSFUs'] = item['OEM\\nSFUs'];
    dist[i]['OEM ONLY\\nVariant Memory'] = item['OEM ONLY\\nVariant Memory'];
    dist[i]['Dual GPU design, 2x GF110\\nSFUs'] = item['Dual GPU design, 2x GF110\\nSFUs'];
    dist[i]['EVGA GTX 580 Batman'] = item['EVGA GTX 580 Batman'];
    dist[i]['OEM ONLY Memory Variant'] = item['OEM ONLY Memory Variant'];
    dist[i]['OEM ONLY\\nMemory Variant'] = item['OEM ONLY\\nMemory Variant'];
    dist[i]['HashRateManually'] = item['HashRateManually'];
});

console.log('entry ' + entry.length);
console.log('dist ' + dist.length);
// fs.writeFile('distGPU.json', JSON.stringify(dist), function(err) {
//     console.log('complete');
// });

var kk = 0;
dist.forEach(element => {
    if (element.HashRateManually) kk++;
});
console.log('With Hashrate ' + kk);
console.log(Math.ceil(kk / dist.length * 100) + ' %');
