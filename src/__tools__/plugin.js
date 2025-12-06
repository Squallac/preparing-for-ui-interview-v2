console.log("[PLUGIN] evaluated");

function init(modules) {
    console.log("[PLUGIN] init", Object.keys(modules));
    return {};
}

module.exports = init;