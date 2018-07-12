/**
 * Demo
 */

import Modal from './Singleton';

const modal1: Modal = Modal.create('design pattern', 'demo of Singleton');
const modal2: Modal = Modal.create('another Modal', 'prototype');

modal1.display();
modal2.display();
