import {render as renderPictures} from './render.js';
import './form-upload.js';
import {getData} from './api.js';
import {renderError} from './errors.js';

getData(renderPictures, renderError);


