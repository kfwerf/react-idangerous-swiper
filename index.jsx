'use strict';
import React from 'react';
import objectAssign from 'object-assign';
import SwiperPlugin from 'iso-swiper';
import Styles from './swiper.scss';

/**
 * @class Swiper
 * @author Kenneth van der Werf
 * @description Swiper wrapper for iDangerous Swiper
 * @dependencies React, objectAssign, SwiperPlugin
 */
export default class Swiper extends React.Component {
  componentDidMount() {
    this.swipe = new SwiperPlugin(React.findDOMNode(this), {
      slidesPerView: 1,
      centeredSlides: true
    });
  }
  render() {
    return React.createElement('div', React.__spread({}, this.props, {className: Styles['swiper-container'] + ' swiper-container'}),
      React.createElement('div', {className: Styles['swiper-wrapper'] + ' swiper-wrapper'},
        React.Children.map(this.props.children, function (child,index) {
          return React.createElement('div', {className: Styles['swiper-slide'] + ' swiper-slide'}, React.cloneElement(child));
        })
      )
    );
  }
}
Swiper.propTypes = {
  slidesPerView: React.PropTypes.number,
  centeredSlides: React.PropTypes.bool
};