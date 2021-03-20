<?php

namespace GutenbergExampleBlocks;

class AssetHelper
{
    public function enqueueExternalStyle(string $handle, string $src, $dependencies = [])
    {
        wp_enqueue_style($handle, $src, $dependencies);
    }

    public function enqueueExternalScript(string $handle, string $src, array $dependencies = [], bool $inFooter = true): void
    {
        wp_enqueue_script($handle, $src, $dependencies, $inFooter);
    }

    // Enqueues both the JS and CSS files for an asset entry file.
    public function enqueueAssets(string $name, array $scriptDependencies = [], array $styleDependencies = [], bool $inFooter = true): void
    {
        if ($this->isDev()) {
            $this->enqueueDevAssets($name, $scriptDependencies, $inFooter);
        } else {
            $this->enqueueProdAssets($name, $scriptDependencies, $styleDependencies, $inFooter);
        }
    }

    // Checks if there are (non-hidden) files in the build directory.
    private function isDev(): bool
    {
        return count(glob(GEB_PLUGIN_PROJECT_DIR . '/public/build/*')) === 0;
    }

    private function enqueueDevAssets($name, $scriptDependencies, $inFooter): void
    {
        wp_enqueue_script('runtime', GEB_PLUGIN_WEBPACK_DEV_ASSET_PATH . 'runtime.js', [], null, true);
        wp_enqueue_script($name, GEB_PLUGIN_WEBPACK_DEV_ASSET_PATH . $name . '.js', $scriptDependencies, null, $inFooter);
    }

    private function enqueueProdAssets($name, $scriptDependencies, $styleDependencies, $inFooter): void
    {
        $script_glob = glob(GEB_PLUGIN_PROJECT_DIR . '/public/build/' . $name . '.*.js');
        $style_glob = glob(GEB_PLUGIN_PROJECT_DIR . '/public/build/' . $name . '.*.css');

        !empty($script_glob) ? wp_enqueue_script($name, GEB_PLUGIN_PROJECT_URL . '/public/build/' . basename($script_glob[0]), $scriptDependencies, null, $inFooter) : null;
        !empty($style_glob) ? wp_enqueue_style($name, GEB_PLUGIN_PROJECT_URL . '/public/build/' . basename($style_glob[0]), $styleDependencies, null) : null;
    }
}