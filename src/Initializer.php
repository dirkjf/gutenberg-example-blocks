<?php

namespace GutenbergExampleBlocks;

use GutenbergExampleBlocks\Blocks\ReactBlock;
use GutenbergExampleBlocks\Blocks\ServerSideBlock;
use GutenbergExampleBlocks\Blocks\StaticBlock;

class Initializer
{
    private $assetHelper;

    public function __construct()
    {
        $this->assetHelper = new AssetHelper();
        add_action('enqueue_block_editor_assets', [$this, 'enqueueAdminAssets']);
        add_action('init', [$this, 'initializeBlocks']);
        add_filter('block_categories', [$this, 'registerBlockCategory'], 10, 2);
    }

    public function enqueueAdminAssets()
    {
        $this->assetHelper->enqueueAssets('editor-index');
    }

    public function initializeBlocks()
    {
        new StaticBlock();
        new ReactBlock();
        new ServerSideBlock();
    }

    public function registerBlockCategory($categories): array
    {
        return array_merge(
            $categories,
            [
                [
                    'slug'  => GEB_PLUGIN_BLOCKS_NAMESPACE,
                    'title' => GEB_PLUGIN_BLOCKS_CATEGORY_NAME,
                ],
            ]
        );
    }

}