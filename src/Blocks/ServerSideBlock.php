<?php

namespace GutenbergExampleBlocks\Blocks;

use GutenbergExampleBlocks\AssetHelper;

class ServerSideBlock extends BaseBlock
{
    public function __construct()
    {
        parent::__construct();

        register_block_type(
            $this->getNameSpacedKebabCaseClassName(),
            array(
                'apiVersion'      => 2,
                'attributes'      => array(
                    'title'       => array(
                        'type'    => 'string',
                        'default' => 'Title of server side block',
                    ),
                    'borderColor' => array(
                        'type'    => 'string',
                        'default' => 'purple',
                    ),
                ),
                'render_callback' => [$this, 'render'],
            )
        );

        add_action('wp_enqueue_scripts', [$this, 'enqueue_public_assets']);
    }

    // Enqueues the public assets if this block is one the current page.
    public function enqueue_public_assets()
    {
        if (has_block($this->getNameSpacedKebabCaseClassName())) {
            (new AssetHelper())->enqueueAssets($this->getKebabCaseClassName());
        }
    }

    public function render($attributes): string
    {
        // You might want to use Timber (Twig) for this.
        return "<div class={$this->getNameSpacedFrontEndKebabCaseClassName()} style='border-color: {$attributes['borderColor']}'><h2>{$attributes['title']}</h2></div>";
    }
}