#target photoshop

if (app.documents.length === 0) {
    alert("Nenhum documento aberto");
    exit();
}

var startInput = prompt(
    "Digite o índice inicial (ex: 1, 11, 21):",
    "1"
);

if (startInput === null) exit();

var START_INDEX = parseInt(startInput, 10);
if (isNaN(START_INDEX) || START_INDEX < 1) {
    alert("Índice inválido.");
    exit();
}

var EXPORT_GROUP_NAME = "EXPORT";
var BUFFER_SIZE = 5;

// ============================
// Utils
// ============================
function pad2(n) {
    return (n < 10 ? "0" : "") + n;
}

function findGroupRecursive(name, parent) {
    parent = parent || app.activeDocument;

    for (var i = 0; i < parent.layerSets.length; i++) {
        var g = parent.layerSets[i];
        if (g.name === name) return g;

        var found = findGroupRecursive(name, g);
        if (found) return found;
    }
    return null;
}

// ============================
// Setup
// ============================
var doc = app.activeDocument;
var group = findGroupRecursive(EXPORT_GROUP_NAME);

if (!group) {
    alert("Grupo '" + EXPORT_GROUP_NAME + "' não encontrado");
    exit();
}

var layers = group.artLayers;

// ============================
// Rename + Export
// ============================
var imageIndex = START_INDEX;

for (var i = 0; i < layers.length; i += BUFFER_SIZE) {

    for (var y = 0; y < BUFFER_SIZE; y++) {

        var idx = i + y;
        if (idx >= layers.length) break;

        var layer = layers[idx];

        var layerName = pad2(imageIndex) + "/S" + y;
        layer.name = layerName;
    }

    imageIndex++;
}

alert("Exportação concluída.");
