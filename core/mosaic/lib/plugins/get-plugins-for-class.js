import pluginStorage from './plugin-storage';

export default function getPluginsForClass(namespaces) {
    // The last pushed into the namespaces array namespace
    // Is an actual, not an inherited one.
    const outerNamespace = namespaces[namespaces.length - 1];

    return (
        pluginStorage.plugins[outerNamespace] 
        && pluginStorage.plugins[outerNamespace].class
    ) || [];
}
