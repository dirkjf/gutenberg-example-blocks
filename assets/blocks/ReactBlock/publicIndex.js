import React from 'react'
import reactRenderHelper from "../helpers/reactRenderHelper";
import block from './block.json'
import {ReactRender} from "./scripts/ReactRender";

import './styles/public.scss';


reactRenderHelper(block.name, ReactRender)
