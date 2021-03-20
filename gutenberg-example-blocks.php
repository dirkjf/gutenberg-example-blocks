<?php

/*
Plugin Name: Gutenberg Example Blocks
Plugin URI:
description: Examples of three different types of blocks you can use in the Gutenberg editor.
Version: 1.0
Author: Dirk Faber
License: MIT
*/

use GutenbergExampleBlocks\Initializer;
use Symfony\Component\Yaml\Yaml;

require_once(__DIR__ . '/vendor/autoload.php');

// Defining globals. The part 'GEB_' (Gutenberg Example Blocks) is simply to make sure that these globals are unique.
define('GEB_PLUGIN_PROJECT_DIR', dirname(__FILE__));
define('GEB_PLUGIN_PROJECT_URL', plugins_url('', __FILE__));
define('GEB_PLUGIN_BLOCKS_NAMESPACE', Yaml::parseFile(GEB_PLUGIN_PROJECT_DIR . '/config/blocks.yaml')['namespace']);
define('GEB_PLUGIN_BLOCKS_CATEGORY_NAME', Yaml::parseFile(GEB_PLUGIN_PROJECT_DIR . '/config/blocks.yaml')['category_name']);
define('GEB_PLUGIN_WEBPACK_DEV_PORT', Yaml::parseFile(GEB_PLUGIN_PROJECT_DIR . '/config/webpack.yaml')['dev_port']);
define('GEB_PLUGIN_WEBPACK_DEV_ASSET_PATH', Yaml::parseFile(GEB_PLUGIN_PROJECT_DIR . '/config/webpack.yaml')['dev_asset_path']);

new Initializer();