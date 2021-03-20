import block from './block.json'
import blocksConfig from 'config/blocks.yaml';
import blockNameHelper from '../helpers/blockNameHelper'
import React from 'react';
import {registerBlockType} from '@wordpress/blocks';

import edit from './js/edit';
import save from './js/save';

import './scss/editor.scss';


(function () {
  registerBlockType(blockNameHelper.namespacedKebabCase(block.name), {
    apiVersion: 2,
    title: blockNameHelper.humanCase(block.name),
    description: block.description,
    category: blocksConfig.namespace,
    keywords: block.keywords,
    attributes: block.attributes,
    edit: (props) => edit(props, blockNameHelper.frontEndCase(block.name)),
    save: (props) => save(props, blockNameHelper.frontEndCase(block.name))
  })
})();