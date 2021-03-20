import React from 'react'
import reactRenderHelper from "../helpers/reactRenderHelper";
import block from './block.json'
import {ReactRender} from "./js/ReactRender";

import './scss/public.scss';


reactRenderHelper(block.name, ReactRender)
