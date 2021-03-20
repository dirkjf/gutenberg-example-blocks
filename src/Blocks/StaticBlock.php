<?php

namespace GutenbergExampleBlocks\Blocks;

use GutenbergExampleBlocks\AssetHelper;

class StaticBlock extends BaseBlock
{
    public function __construct()
    {
        parent::__construct();
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_public_assets' ] );
    }

    // Enqueues the public assets if this block is one the current page.
    public function enqueue_public_assets()
    {
        if ( has_block($this->getNameSpacedKebabCaseClassName()) ) {
            (new AssetHelper())->enqueueAssets($this->getKebabCaseClassName());
        }
    }
}