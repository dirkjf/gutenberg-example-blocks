<?php


namespace GutenbergExampleBlocks\Blocks;

use ReflectionClass;

/**
 * Extending this block makes resolves having to name everything each time.
 */
class BaseBlock
{

    protected $className;

    public function __construct()
    {
        $this->className = (new ReflectionClass($this))->getShortName();
    }

    protected function getClassName(): string
    {
        return $this->className;
    }

    protected function getKebabCaseClassName(): string
    {
        return strtolower(preg_replace('%([a-z])([A-Z])%', '\1-\2', $this->getClassName()));
    }

    protected function getNameSpacedFrontEndKebabCaseClassName(): string
    {
        return GEB_PLUGIN_BLOCKS_NAMESPACE . '-' . $this->getKebabCaseClassName();
    }

    protected function getNameSpacedKebabCaseClassName(): string
    {
        return GEB_PLUGIN_BLOCKS_NAMESPACE . '/' . $this->getKebabCaseClassName();
    }

}
