import { Component, ComponentInterface, Element, Prop, Watch } from '@stencil/core';

import { uniSetDefaultStyles, uniSetRound } from '@uiwebkit/common';

import svg from '../../../../assets/svg/4x3/jp.svg';
import squareSvg from '../../../../assets/svg/1x1/jp.svg';

@Component({ tag: 'uni-flag-jp' })
export class UniFlagJpComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) square: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Watch('square')
  onSquare(newValue: boolean): void {
    this.el.innerHTML = newValue ? squareSvg : svg;
  }

  @Watch('round')
  onRound(newValue: boolean): void {
    uniSetRound(this.el, newValue);
  }

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = this.square ? squareSvg : svg;
    uniSetDefaultStyles(this.el);
    uniSetRound(this.el, this.round);
  }
}
